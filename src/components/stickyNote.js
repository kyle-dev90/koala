import React, { useCallback, useMemo, useEffect, useState, createRef } from "react"
import { X, Plus, Image, Edit2, Square, RefreshCcw } from "react-feather"
import Draggable from "react-draggable"
import { Card, CardBody, Input, Spinner } from "reactstrap"
import { ReactSketchCanvas } from "react-sketch-canvas"
import S3 from "react-aws-s3"
import "../assets/components/stickyNote.css"

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: "uploads",
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    // s3Url: "https://koala-upload.s3.us-east-2.amazonaws.com/"
}

const ReactS3Client = new S3(config)

export default function StickNote(props) {
    const canvasRef = createRef()
    const [uploading, setUploading] = useState(false)
    const [canvasTool, setCanvasTool] = useState("")
    const [xPos, setXPos] = useState(100)
    const [yPos, setYPos] = useState(100)
    const [canvasPath, setCanvasPath] = useState([])

    const setEraseMode = useCallback(
        (value) => {
            if (canvasRef.current) {
                canvasRef.current.eraseMode(value)
            }
        },
        [canvasRef]
    )

    const toggleCanvas = useCallback(
        (value) => {
            if (canvasTool === value) {
                setCanvasTool("")
            } else {
                setCanvasTool(value)
            }
            // if (value === "erase") {
            //     setEraseMode(true)
            // } else {
            //     setEraseMode(false)
            // }
            props.onChangeCanvasPath(props.data.id, canvasPath)
        },
        [props, canvasTool, setCanvasTool, setEraseMode, canvasPath]
    )

    const onRemove = useCallback(() => {
        props.onRemove(props.data.id)
    }, [props])

    const handlePosition = useCallback(
        (x, y) => {
            props.onStop(props.data.id, x, y)
            setXPos(x)
            setYPos(y)
        },
        [props, setXPos, setYPos]
    )

    const handleChange = useCallback(
        (event) => {
            const { name, value } = event.currentTarget
            let noteText = props.data.content
            let color = props.data.color
            let color2 = props.data.color2
            if (name === "color") {
                color = value
            } else if (name === "color2") {
                color2 = value
            } else if (name === "noteText") {
                noteText = value
            }
            props.onSave(props.data.id, noteText, color, color2)
        },
        [props]
    )

    const editColorMemo = useMemo(() => {
        return (
            <div className="mx-1">
                <input
                    type="color"
                    name="color"
                    defaultValue={props.data.color}
                    className="sticky-color-input"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="color"
                    name="color2"
                    defaultValue={props.data.color2}
                    className="sticky-color-input mx-1"
                    onChange={(e) => handleChange(e)}
                />
            </div>
        )
    }, [props])

    const removeImage = useCallback(
        (idx) => {
            let imgs = [...props.data.images]
            imgs = imgs.filter((image, id) => {
                if (id !== idx) {
                    return image
                }
            })
            props.onUpdateImg(props.data.id, imgs)
        },
        [props]
    )

    const imageMemo = useMemo(() => {
        return (
            props.data.images.length > 0 &&
            props.data.images.map((img, id) => {
                return (
                    <div key={id} className="image-item">
                        <div onClick={() => removeImage(id)} className="image-remove-div">
                            <X size={20} color="#ffffff" />
                        </div>
                        <img src={img} />
                    </div>
                )
            })
        )
    }, [props])

    const handleImage = useCallback(
        async (e) => {
            const file = e.target.files[0]
            if (file) {
                const formData = new FormData()
                formData.append("image", file)
                setUploading(true)
                try {
                    console.log(process.env.REACT_APP_AWS_BUCKET_NAME)
                    const fileName = `${props.data.id}-${file.name}`
                    const data = await ReactS3Client.uploadFile(file, fileName)
                    console.log("upload data: ", data)
                    const imgs = [...props.data.images]
                    imgs.push(data.location)
                    props.onUpdateImg(props.data.id, imgs)
                    setUploading(false)
                } catch (error) {
                    console.error(error)
                    setUploading(false)
                }
            }
        },
        [props, setUploading]
    )

    const imageSelectMemo = useMemo(() => {
        return (
            <input
                id={`image-upload-${props.data.id}`}
                className="image-file-selector"
                type="file"
                accept="image/*"
                onChange={(e) => handleImage(e)}
            />
        )
    }, [props])

    const clearCanvas = useCallback(() => {
        if (canvasRef.current) {
            canvasRef.current.clearCanvas()
            props.onChangeCanvasPath(props.data.id, {})
        }
    }, [props, canvasRef])

    const onChangeCanvasPath = useCallback(() => {
        if (canvasRef.current) {
            canvasRef.current.exportPaths().then((result) => {
                setCanvasPath(result)
                props.onChangeCanvasPath(props.data.id, result)
            })
        }
    }, [canvasRef, setCanvasPath, props])

    const canvasMemo = useMemo(() => {
        return (
            <ReactSketchCanvas
                ref={canvasRef}
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    overflow: "hidden",
                    zIndex: canvasTool !== "" ? 99 : -1
                }}
                className="sketch-canvas-area"
                strokeWidth={canvasTool === "erase" ? 40 : 2}
                eraserWidth={2}
                strokeColor={canvasTool === "erase" ? props.data.color : "#333333"}
                onChange={() => onChangeCanvasPath()}
            />
        )
    }, [canvasRef, canvasTool, props])

    const uploadImgBtnMemo = useMemo(() => {
        return uploading ? (
            <Spinner className="img-upload-spinner" />
        ) : (
            <label htmlFor={`image-upload-${props.data.id}`} className="d-flex align-items-center">
                <Image size={22} className="sticky-plus mx-1" />
            </label>
        )
    }, [uploading])

    useEffect(() => {
        setXPos(props.data.position.x)
        setYPos(props.data.position.y)
        canvasRef.current.loadPaths(props.data.canvasPath)
    }, [props])

    return (
        <>
            <Draggable
                handle=".handle"
                position={{ x: xPos, y: yPos }}
                onStop={(e, data) => handlePosition(data.x, data.y)}
            >
                <Card
                    style={{ backgroundColor: props.data.color }}
                    className="sticky-note-card cursor-pointer"
                >
                    <CardBody className="p-0">
                        <div className="sticky-action-wrapper">
                            <div
                                style={{ backgroundColor: props.data.color2 }}
                                className="handle sticky-note-action d-flex justify-content-between align-items-center p-1"
                            >
                                <div className="p-0 d-flex align-items-center m-1 action-div">
                                    <Plus className="sticky-plus" onClick={() => props.onAdd()} />
                                </div>
                                <div className="d-flex align-items-center m-1 action-div">
                                    <RefreshCcw
                                        onClick={() => clearCanvas()}
                                        size={18}
                                        className="sticky-plus mx-2"
                                    />
                                    <div
                                        onClick={() => toggleCanvas("erase")}
                                        className={
                                            canvasTool === "erase"
                                                ? "pencil-button-select"
                                                : "pencil-button"
                                        }
                                    >
                                        <Square size={18} />
                                    </div>
                                    <div
                                        onClick={() => toggleCanvas("pencil")}
                                        className={
                                            canvasTool === "pencil"
                                                ? "pencil-button-select"
                                                : "pencil-button"
                                        }
                                    >
                                        <Edit2 size={18} />
                                    </div>
                                    {uploadImgBtnMemo}
                                    {imageSelectMemo}
                                    {editColorMemo}
                                    <X
                                        onClick={() => onRemove()}
                                        className="sticky-close"
                                        size={22}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="px-2 pt-2 images-wrapper">{imageMemo}</div>
                            <div className="textarea-canvas">
                                <Input
                                    autoFocus
                                    type="textarea"
                                    placeholder="input note..."
                                    name="noteText"
                                    className="sticky-note-textarea"
                                    defaultValue={props.data.content}
                                    onChange={(e) => handleChange(e)}
                                />
                                {canvasMemo}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Draggable>
        </>
    )
}
