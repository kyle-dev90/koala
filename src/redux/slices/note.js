import { createSlice } from "@reduxjs/toolkit"
import { Note, Point, Canvas } from "../../models"
import { DataStore, Predicates } from "aws-amplify"
import { getRandomIntegerBetween } from "../../common/Utils"

const initialState = {
    isLoading: false,
    error: false,
    notes: []
}

const slice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true
        },
        hasError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        getNotesSuccess(state, action) {
            state.isLoading = false
            state.notes = action.payload
        },
        setNotes(state, action) {
            state.notes = action.payload
        },
        setInitialize(state) {
            localStorage.clear()
            state.notes = []
        }
    }
})

export const { getNotesSuccess, hasError, startLoading, setNotes, setInitialize } = slice.actions

export const getNotes = () => {
    return async (dispatch) => {
        dispatch(startLoading())
        try {
            const notes = await DataStore.query(Note, Predicates.ALL)
            if (notes.length > 0) {
                const notesData = await Promise.all(
                    notes.map(async (note) => {
                        const points = await DataStore.query(Point, (point) =>
                            point.noteID("eq", note.id)
                        )
                        const canvas = await DataStore.query(Canvas, (canvas) =>
                            canvas.noteID("eq", note.id)
                        )
                        let canvasPath = []
                        if (canvas.length > 0) {
                            canvasPath = await Promise.all(
                                canvas.map(async (can) => {
                                    const paths = await DataStore.query(Point, (point) =>
                                        point.canvasID("eq", can.id)
                                    )
                                    const pathData = []
                                    if (paths.length > 0) {
                                        paths.map((path) => {
                                            const pathObject = {
                                                x: path.x,
                                                y: path.y
                                            }
                                            pathData.push(pathObject)
                                        })
                                    }
                                    return {
                                        drawMode: can.drawMode,
                                        paths: pathData,
                                        strokeColor: can.strokeColor,
                                        strokeWidth: can.strokeWidth
                                    }
                                })
                            )
                        }
                        const noteObject = {
                            id: note.id,
                            content: note.content,
                            position: {
                                x: points[0].x || 100,
                                y: points[0].y || 100
                            },
                            color: note.color,
                            color2: note.color2,
                            images: note.images,
                            canvasPath: canvasPath
                        }
                        return noteObject
                    })
                )
                dispatch(getNotesSuccess(notesData))
            }
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export const createNote = (data) => {
    return async (dispatch) => {
        try {
            const res = await DataStore.save(new Note(data))
            if (res) {
                const date = new Date()
                const point = {
                    x: getRandomIntegerBetween(10, 200),
                    y: getRandomIntegerBetween(10, 200),
                    noteID: res.id,
                    createdAt: date.toISOString(),
                    _version: 1,
                    _deleted: false,
                    _lastChangedAt: date.getTime()
                }
                DataStore.save(new Point(point))
            }
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export const updateNote = (id, data) => {
    return async (dispatch) => {
        try {
            const note = await DataStore.query(Note, (note) => note.id("eq", id))
            DataStore.save(
                Note.copyOf(note[0], (updated) => {
                    updated.content = data.content
                    updated.color = data.color
                    updated.color2 = data.color2
                })
            )
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export const updateNoteImage = (id, images) => {
    return async (dispatch) => {
        try {
            const note = await DataStore.query(Note, (note) => note.id("eq", id))
            DataStore.save(
                Note.copyOf(note[0], (updated) => {
                    updated.images = images
                })
            )
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export const removeNote = (noteID) => {
    return async (dispatch) => {
        try {
            await DataStore.delete(Note, (note) => note.id("eq", noteID))
            await DataStore.delete(Point, (point) => point.noteID("eq", noteID))
            await DataStore.delete(Canvas, (canvas) => canvas.noteID("eq", noteID))
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export const changePosition = (data) => {
    return async (dispatch) => {
        try {
            const points = await DataStore.query(Point, (point) => point.noteID("eq", data.noteID))
            DataStore.save(
                Point.copyOf(points[0], (updated) => {
                    updated.x = data.x
                    updated.y = data.y
                })
            )
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export const createCanvasData = (data) => {
    return async (dispatch) => {
        try {
            // const canvases = await DataStore.query(Canvas, (canvas) =>
            //     canvas.noteID("eq", data.noteID)
            // )
            // if (canvases.length > 0) {
            //     canvases.map(async (canvas) => {
            //         await DataStore.delete(Point, (point) => point.canvasID("eq", canvas.id))
            //     })
            // }
            // await DataStore.delete(Canvas, (canvas) => canvas.noteID("eq", data.noteID))
            const date = new Date()
            const canvasData = {
                drawMode: data.drawMode,
                strokeColor: data.strokeColor,
                strokeWidth: data.strokeColor,
                noteID: data.noteID,
                createdAt: date.toISOString()
            }
            const res = await DataStore.save(new Canvas(canvasData))
            console.log(res)
            if (res) {
                data.paths.map(async (path) => {
                    const point = {
                        x: path.x,
                        y: path.y,
                        canvasID: res.id,
                        createdAt: date.toISOString(),
                        _version: 1,
                        _deleted: false,
                        _lastChangedAt: date.getTime()
                    }
                    await DataStore.save(new Point(point))
                })
            }
        } catch (error) {
            dispatch(hasError(error))
        }
    }
}

export default slice.reducer
