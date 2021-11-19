import React, { useEffect } from "react"
import { Auth, Hub, DataStore } from "aws-amplify"
import { useHistory } from "react-router"
import { Button } from "reactstrap"
import "../assets/dashboard.css"
import { setupDataStore } from "../common/Utils"

export default function Login() {
    const history = useHistory()

    useEffect(() => {
        Hub.listen("auth", async ({ payload: { event, data } }) => {
            if (event === "signIn") {
                console.log("sign in", event, data)
                const userData = {
                    name: data.username,
                    userDataKey: data.userDataKey
                }
                localStorage.setItem("userData", JSON.stringify(userData))
                await DataStore.clear()
                await DataStore.stop()
                setupDataStore()
                history.push("/")
            } else if (event === "signOut") {
                console.log("sign out")
                localStorage.clear()
            }
        })
    }, [])

    return (
        <div className="d-flex justify-content-center p-4 login-div">
            <Button className="login-btn" color="primary" onClick={() => Auth.federatedSignIn()}>
                Login
            </Button>
        </div>
    )
}
