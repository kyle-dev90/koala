import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore"

type PointMetaData = {
    readOnlyFields: "updatedAt"
}

type CanvasMetaData = {
    readOnlyFields: "updatedAt"
}

type NoteMetaData = {
    readOnlyFields: "updatedAt"
}

export declare class Point {
    readonly id: string
    readonly x: number
    readonly y: number
    readonly noteID?: string
    readonly canvasID?: string
    readonly createdAt: string
    readonly updatedAt?: string
    constructor(init: ModelInit<Point, PointMetaData>)
    static copyOf(
        source: Point,
        mutator: (
            draft: MutableModel<Point, PointMetaData>
        ) => MutableModel<Point, PointMetaData> | void
    ): Point
}

export declare class Canvas {
    readonly id: string
    readonly drawMode?: boolean
    readonly paths: Point[]
    readonly strokeColor?: string
    readonly strokeWidth?: number
    readonly noteID: string
    readonly createdAt: string
    readonly updatedAt?: string
    constructor(init: ModelInit<Canvas, CanvasMetaData>)
    static copyOf(
        source: Canvas,
        mutator: (
            draft: MutableModel<Canvas, CanvasMetaData>
        ) => MutableModel<Canvas, CanvasMetaData> | void
    ): Canvas
}

export declare class Note {
    readonly id: string
    readonly content?: string
    readonly position: Point[]
    readonly background?: string
    readonly color?: string
    readonly color2?: string
    readonly images?: (string | null)[]
    readonly canvasPaths: Canvas[]
    readonly createdAt: string
    readonly updatedAt?: string
    constructor(init: ModelInit<Note, NoteMetaData>)
    static copyOf(
        source: Note,
        mutator: (
            draft: MutableModel<Note, NoteMetaData>
        ) => MutableModel<Note, NoteMetaData> | void
    ): Note
}
