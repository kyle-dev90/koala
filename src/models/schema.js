export const schema = {
    models: {
        Point: {
            name: "Point",
            fields: {
                id: {
                    name: "id",
                    isArray: false,
                    type: "ID",
                    isRequired: true,
                    attributes: []
                },
                x: {
                    name: "x",
                    isArray: false,
                    type: "Int",
                    isRequired: true,
                    attributes: []
                },
                y: {
                    name: "y",
                    isArray: false,
                    type: "Int",
                    isRequired: true,
                    attributes: []
                },
                noteID: {
                    name: "noteID",
                    isArray: false,
                    type: "ID",
                    isRequired: false,
                    attributes: []
                },
                canvasID: {
                    name: "canvasID",
                    isArray: false,
                    type: "ID",
                    isRequired: false,
                    attributes: []
                },
                createdAt: {
                    name: "createdAt",
                    isArray: false,
                    type: "AWSDateTime",
                    isRequired: true,
                    attributes: []
                },
                updatedAt: {
                    name: "updatedAt",
                    isArray: false,
                    type: "AWSDateTime",
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true
                }
            },
            syncable: true,
            pluralName: "Points",
            attributes: [
                {
                    type: "model",
                    properties: {}
                },
                {
                    type: "key",
                    properties: {
                        name: "byNote",
                        fields: ["noteID", "createdAt"],
                        queryField: "PointbyNote"
                    }
                },
                {
                    type: "key",
                    properties: {
                        name: "byCanvas",
                        fields: ["canvasID", "createdAt"],
                        queryField: "PointbyCanvas"
                    }
                }
            ]
        },
        Canvas: {
            name: "Canvas",
            fields: {
                id: {
                    name: "id",
                    isArray: false,
                    type: "ID",
                    isRequired: true,
                    attributes: []
                },
                drawMode: {
                    name: "drawMode",
                    isArray: false,
                    type: "Boolean",
                    isRequired: false,
                    attributes: []
                },
                paths: {
                    name: "paths",
                    isArray: true,
                    type: {
                        model: "Point"
                    },
                    isRequired: true,
                    attributes: [],
                    isArrayNullable: false,
                    association: {
                        connectionType: "HAS_MANY",
                        associatedWith: "canvasID"
                    }
                },
                strokeColor: {
                    name: "strokeColor",
                    isArray: false,
                    type: "String",
                    isRequired: false,
                    attributes: []
                },
                strokeWidth: {
                    name: "strokeWidth",
                    isArray: false,
                    type: "Int",
                    isRequired: false,
                    attributes: []
                },
                noteID: {
                    name: "noteID",
                    isArray: false,
                    type: "ID",
                    isRequired: true,
                    attributes: []
                },
                createdAt: {
                    name: "createdAt",
                    isArray: false,
                    type: "AWSDateTime",
                    isRequired: true,
                    attributes: []
                },
                updatedAt: {
                    name: "updatedAt",
                    isArray: false,
                    type: "AWSDateTime",
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true
                }
            },
            syncable: true,
            pluralName: "Canvas",
            attributes: [
                {
                    type: "model",
                    properties: {}
                },
                {
                    type: "key",
                    properties: {
                        name: "byNote",
                        fields: ["noteID", "createdAt"],
                        queryField: "CanvasbyNote"
                    }
                }
            ]
        },
        Note: {
            name: "Note",
            fields: {
                id: {
                    name: "id",
                    isArray: false,
                    type: "ID",
                    isRequired: true,
                    attributes: []
                },
                content: {
                    name: "content",
                    isArray: false,
                    type: "String",
                    isRequired: false,
                    attributes: []
                },
                position: {
                    name: "position",
                    isArray: true,
                    type: {
                        model: "Point"
                    },
                    isRequired: true,
                    attributes: [],
                    isArrayNullable: false,
                    association: {
                        connectionType: "HAS_MANY",
                        associatedWith: "noteID"
                    }
                },
                background: {
                    name: "background",
                    isArray: false,
                    type: "String",
                    isRequired: false,
                    attributes: []
                },
                color: {
                    name: "color",
                    isArray: false,
                    type: "String",
                    isRequired: false,
                    attributes: []
                },
                color2: {
                    name: "color2",
                    isArray: false,
                    type: "String",
                    isRequired: false,
                    attributes: []
                },
                images: {
                    name: "images",
                    isArray: true,
                    type: "String",
                    isRequired: false,
                    attributes: [],
                    isArrayNullable: true
                },
                canvasPaths: {
                    name: "canvasPaths",
                    isArray: true,
                    type: {
                        model: "Canvas"
                    },
                    isRequired: true,
                    attributes: [],
                    isArrayNullable: false,
                    association: {
                        connectionType: "HAS_MANY",
                        associatedWith: "noteID"
                    }
                },
                createdAt: {
                    name: "createdAt",
                    isArray: false,
                    type: "AWSDateTime",
                    isRequired: true,
                    attributes: []
                },
                updatedAt: {
                    name: "updatedAt",
                    isArray: false,
                    type: "AWSDateTime",
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true
                }
            },
            syncable: true,
            pluralName: "Notes",
            attributes: [
                {
                    type: "model",
                    properties: {}
                }
            ]
        }
    },
    enums: {},
    nonModels: {},
    version: "a75a3653c4eafe1c357a73c5cc747af4"
}
