import React, { useState, useCallback, useEffect, useMemo } from "react"
import StickNote from "../components/stickyNote"
import { Plus, LogOut } from "react-feather"
import { Auth, DataStore } from "aws-amplify"
import {
    DEFAULT_BACKGROUND_COLOR,
    DEFAULT_ACTION_BACKGROUND_COLOR,
    DEFAULT_CONTENT,
    DEFAULT_PLUS_COLOR,
    isUserLoggedIn,
    getUserData,
    clearDataStore
} from "../common/Utils"
import { useHistory } from "react-router"
import "../assets/dashboard.css"
import { useDispatch, useSelector } from "react-redux"
import {
    getNotes,
    changePosition,
    createNote,
    removeNote,
    updateNote,
    updateNoteImage,
    createCanvasData
} from "../redux/slices/note"
import { Note, Point, Canvas } from "../models"

export default function Dashboard() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { notes } = useSelector((state) => state.note)
    const [userData, setUserData] = useState({})

    const addSticky = useCallback(() => {
        const date = new Date()
        const note = {
            content: DEFAULT_CONTENT,
            background: DEFAULT_BACKGROUND_COLOR,
            color: DEFAULT_BACKGROUND_COLOR,
            color2: DEFAULT_ACTION_BACKGROUND_COLOR,
            images: [],
            createdAt: date.toISOString(),
            _version: 1,
            _deleted: false,
            _lastChangedAt: date.getTime()
        }
        console.log("add sticky: ", note)
        dispatch(createNote(note))
    }, [dispatch])

    const onRemoveSticky = useCallback(
        (id) => {
            dispatch(removeNote(id))
            console.log("remove sticky: ", id)
        },
        [dispatch]
    )

    const onUpdateSticky = useCallback(
        (id, noteText, color, color2) => {
            const data = {
                content: noteText,
                color: color,
                color2: color2
            }
            dispatch(updateNote(id, data))
            console.log("remove sticky: ", id, noteText, color, color2)
        },
        [dispatch]
    )

    const onUpdateImages = useCallback(
        (id, imgs) => {
            dispatch(updateNoteImage(id, imgs))
            console.log("update img: ", id, imgs)
        },
        [dispatch]
    )

    const onChangePosition = useCallback(
        (id, x, y) => {
            const data = {
                noteID: id,
                x: x,
                y: y
            }
            dispatch(changePosition(data))
            console.log("position change: ", id, x, y)
        },
        [dispatch]
    )

    const onChangeCanvasPath = useCallback(
        (id, path) => {
            if (path.length > 0) {
                path.map((canvas) => {
                    const canvasData = {
                        noteID: id,
                        drawMode: canvas.drawMode,
                        strokeColor: canvas.strokeColor,
                        strokeWidth: canvas.strokeWidth,
                        paths: canvas.paths
                    }
                    dispatch(createCanvasData(canvasData))
                })
            }
            // console.log("path change: ", id, path)
        },
        [dispatch]
    )

    const stikyMemo = useMemo(() => {
        if (notes.length > 0) {
            return notes.map((sticky, id) => {
                return (
                    <StickNote
                        key={id}
                        data={sticky}
                        onStop={onChangePosition}
                        onRemove={onRemoveSticky}
                        onSave={onUpdateSticky}
                        onAdd={addSticky}
                        onUpdateImg={onUpdateImages}
                        onChangeCanvasPath={onChangeCanvasPath}
                    />
                )
            })
        }
    }, [notes])

    const logOut = useCallback(async () => {
        try {
            localStorage.clear()
            setUserData({})
            clearDataStore()
            await Auth.signOut()
            history.push("/login")
        } catch (err) {
            console.log(err)
        }
    }, [setUserData])

    useEffect(async () => {
        if (isUserLoggedIn()) {
            setUserData(getUserData())
        }
        dispatch(getNotes())
        const subscription1 = DataStore.observe(Point).subscribe(async () => {
            dispatch(getNotes())
        })
        const subscription2 = DataStore.observe(Note).subscribe(async () => {
            dispatch(getNotes())
        })
        const subscription3 = DataStore.observe(Canvas).subscribe(async () => {
            dispatch(getNotes())
        })
        return () => {
            subscription1.unsubscribe()
            subscription2.unsubscribe()
            subscription3.unsubscribe()
        }
    }, [dispatch])

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div onClick={() => addSticky()} className="sticky-add-btn">
                    <Plus color={DEFAULT_PLUS_COLOR} />
                </div>
                <div className="d-flex m-4 align-items-center">
                    <h4 className="mx-3">Welcome! {userData.name}</h4>
                    <LogOut className="logout-btn" onClick={() => logOut()} size={24} />
                </div>
            </div>

            {stikyMemo}
        </div>
    )
}
