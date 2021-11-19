import React from "react"
import { Redirect } from "react-router-dom"
import { isUserLoggedIn } from "../common/Utils"

export default function AuthProtect({ children }) {
    if (isUserLoggedIn()) {
        return <Redirect to="/" />
    }

    return <>{children}</>
}
