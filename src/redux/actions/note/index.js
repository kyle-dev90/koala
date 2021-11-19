import { Note, Point, Canvas } from "../../../models"
import { DataStore, Predicates } from "aws-amplify"

export const getNotes = async () => {
    try {
        const notes = await DataStore.query(Note, Predicates.ALL)
        console.log(notes)
        return notes
    } catch (error) {
        console.log("Error: ", error.message)
        return null
    }
}

export const getPoints = async (noteID) => {
    try {
        const points = await DataStore.query(Point, (point) => point.noteID("eq", noteID))
        console.log("points: ", points)
        return points
    } catch (error) {
        console.log("Error: ", error.message)
        return null
    }
}

export const getCanvas = async (noteID) => {
    try {
        const canvas = await DataStore.query(Canvas, (canvas) => canvas.noteID("eq", noteID))
        console.log("canvas: ", canvas)
        return canvas
    } catch (error) {
        console.log("Error: ", error.message)
        return null
    }
}
