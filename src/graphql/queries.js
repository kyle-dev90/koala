/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPoints = /* GraphQL */ `
    query SyncPoints(
        $filter: ModelPointFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncPoints(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
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
    }
`
export const getPoint = /* GraphQL */ `
    query GetPoint($id: ID!) {
        getPoint(id: $id) {
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
export const listPoints = /* GraphQL */ `
    query ListPoints($filter: ModelPointFilterInput, $limit: Int, $nextToken: String) {
        listPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    }
`
export const syncCanvas = /* GraphQL */ `
    query SyncCanvas(
        $filter: ModelCanvasFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncCanvas(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
            items {
                id
                drawMode
                paths {
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
            nextToken
            startedAt
        }
    }
`
export const getCanvas = /* GraphQL */ `
    query GetCanvas($id: ID!) {
        getCanvas(id: $id) {
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
export const listCanvas = /* GraphQL */ `
    query ListCanvas($filter: ModelCanvasFilterInput, $limit: Int, $nextToken: String) {
        listCanvas(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                drawMode
                paths {
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
            nextToken
            startedAt
        }
    }
`
export const syncNotes = /* GraphQL */ `
    query SyncNotes(
        $filter: ModelNoteFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncNotes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
            items {
                id
                content
                position {
                    nextToken
                    startedAt
                }
                background
                color
                color2
                images
                canvasPaths {
                    nextToken
                    startedAt
                }
                createdAt
                _version
                _deleted
                _lastChangedAt
                updatedAt
            }
            nextToken
            startedAt
        }
    }
`
export const getNote = /* GraphQL */ `
    query GetNote($id: ID!) {
        getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
    query ListNotes($filter: ModelNoteFilterInput, $limit: Int, $nextToken: String) {
        listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                content
                position {
                    nextToken
                    startedAt
                }
                background
                color
                color2
                images
                canvasPaths {
                    nextToken
                    startedAt
                }
                createdAt
                _version
                _deleted
                _lastChangedAt
                updatedAt
            }
            nextToken
            startedAt
        }
    }
`
export const pointbyNote = /* GraphQL */ `
    query PointbyNote(
        $noteID: ID
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelPointFilterInput
        $limit: Int
        $nextToken: String
    ) {
        PointbyNote(
            noteID: $noteID
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const pointbyCanvas = /* GraphQL */ `
    query PointbyCanvas(
        $canvasID: ID
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelPointFilterInput
        $limit: Int
        $nextToken: String
    ) {
        PointbyCanvas(
            canvasID: $canvasID
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const canvasbyNote = /* GraphQL */ `
    query CanvasbyNote(
        $noteID: ID
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelCanvasFilterInput
        $limit: Int
        $nextToken: String
    ) {
        CanvasbyNote(
            noteID: $noteID
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                drawMode
                paths {
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
            nextToken
            startedAt
        }
    }
`
