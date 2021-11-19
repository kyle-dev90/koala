/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPoint = /* GraphQL */ `
    mutation CreatePoint($input: CreatePointInput!, $condition: ModelPointConditionInput) {
        createPoint(input: $input, condition: $condition) {
            id
            x
            y
            noteID
            canvasID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const updatePoint = /* GraphQL */ `
    mutation UpdatePoint($input: UpdatePointInput!, $condition: ModelPointConditionInput) {
        updatePoint(input: $input, condition: $condition) {
            id
            x
            y
            noteID
            canvasID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const deletePoint = /* GraphQL */ `
    mutation DeletePoint($input: DeletePointInput!, $condition: ModelPointConditionInput) {
        deletePoint(input: $input, condition: $condition) {
            id
            x
            y
            noteID
            canvasID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const createCanvas = /* GraphQL */ `
    mutation CreateCanvas($input: CreateCanvasInput!, $condition: ModelCanvasConditionInput) {
        createCanvas(input: $input, condition: $condition) {
            id
            drawMode
            paths {
                items {
                    id
                    x
                    y
                    noteID
                    canvasID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            strokeColor
            strokeWidth
            noteID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const updateCanvas = /* GraphQL */ `
    mutation UpdateCanvas($input: UpdateCanvasInput!, $condition: ModelCanvasConditionInput) {
        updateCanvas(input: $input, condition: $condition) {
            id
            drawMode
            paths {
                items {
                    id
                    x
                    y
                    noteID
                    canvasID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            strokeColor
            strokeWidth
            noteID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const deleteCanvas = /* GraphQL */ `
    mutation DeleteCanvas($input: DeleteCanvasInput!, $condition: ModelCanvasConditionInput) {
        deleteCanvas(input: $input, condition: $condition) {
            id
            drawMode
            paths {
                items {
                    id
                    x
                    y
                    noteID
                    canvasID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            strokeColor
            strokeWidth
            noteID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const createNote = /* GraphQL */ `
    mutation CreateNote($input: CreateNoteInput!, $condition: ModelNoteConditionInput) {
        createNote(input: $input, condition: $condition) {
            id
            content
            position {
                items {
                    id
                    x
                    y
                    noteID
                    canvasID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            background
            color
            color2
            images
            canvasPaths {
                items {
                    id
                    drawMode
                    strokeColor
                    strokeWidth
                    noteID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const updateNote = /* GraphQL */ `
    mutation UpdateNote($input: UpdateNoteInput!, $condition: ModelNoteConditionInput) {
        updateNote(input: $input, condition: $condition) {
            id
            content
            position {
                items {
                    id
                    x
                    y
                    noteID
                    canvasID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            background
            color
            color2
            images
            canvasPaths {
                items {
                    id
                    drawMode
                    strokeColor
                    strokeWidth
                    noteID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
export const deleteNote = /* GraphQL */ `
    mutation DeleteNote($input: DeleteNoteInput!, $condition: ModelNoteConditionInput) {
        deleteNote(input: $input, condition: $condition) {
            id
            content
            position {
                items {
                    id
                    x
                    y
                    noteID
                    canvasID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            background
            color
            color2
            images
            canvasPaths {
                items {
                    id
                    drawMode
                    strokeColor
                    strokeWidth
                    noteID
                    createdAt
                    _version
                    _deleted
                    _lastChangedAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
        }
    }
`
