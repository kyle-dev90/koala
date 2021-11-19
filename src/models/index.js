// @ts-check
import { initSchema } from "@aws-amplify/datastore"
import { schema } from "./schema"

const { Point, Canvas, Note } = initSchema(schema)

export { Point, Canvas, Note }
