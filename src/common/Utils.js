import { DataStore } from "aws-amplify"
import * as models from "../models"

export const setupDataStore = () => {
    DataStore.configure({
        maxRecordsToSync: 100000,
        syncExpressions: []
    })
    DataStore.query(models.Note)
    DataStore.start()
}

export const clearDataStore = () => {
    DataStore.clear()
    DataStore.stop()
}

export const getRandomIntegerBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomPosition = () => {
    return { x: getRandomIntegerBetween(10, 200), y: getRandomIntegerBetween(10, 200) }
}

export const isUserLoggedIn = () => localStorage.getItem("userData")
export const getUserData = () => JSON.parse(localStorage.getItem("userData"))

export const DEFAULT_BACKGROUND_COLOR = "#fcf26a"
export const DEFAULT_ACTION_BACKGROUND_COLOR = "#7d58fb"
export const DEFAULT_CONTENT = "New content"
export const DEFAULT_PLUS_COLOR = "#ffffff"
