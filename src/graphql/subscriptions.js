/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePoint = /* GraphQL */ `
    subscription OnCreatePoint {
        onCreatePoint {
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
export const onUpdatePoint = /* GraphQL */ `
    subscription OnUpdatePoint {
        onUpdatePoint {
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
export const onDeletePoint = /* GraphQL */ `
    subscription OnDeletePoint {
        onDeletePoint {
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
export const onCreateCanvas = /* GraphQL */ `
    subscription OnCreateCanvas {
        onCreateCanvas {
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
export const onUpdateCanvas = /* GraphQL */ `
    subscription OnUpdateCanvas {
        onUpdateCanvas {
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
export const onDeleteCanvas = /* GraphQL */ `
    subscription OnDeleteCanvas {
        onDeleteCanvas {
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
export const onCreateNote = /* GraphQL */ `
    subscription OnCreateNote {
        onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
    subscription OnUpdateNote {
        onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
    subscription OnDeleteNote {
        onDeleteNote {
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
