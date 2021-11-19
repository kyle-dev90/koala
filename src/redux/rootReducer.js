import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import noteReducer from "./slices/note"

const rootPersistConfig = {
    key: "root",
    storage: storage,
    keyPrefix: "redux-",
    whitelist: ["settings"]
}

const rootReducer = combineReducers({
    note: noteReducer
})

export { rootPersistConfig, rootReducer }
