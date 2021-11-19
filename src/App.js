import React from "react"
import { Router, BrowserRouter } from "react-router-dom"
import { createBrowserHistory } from "history"
import { renderRoutes } from "./routes"
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports.js"
import { setupDataStore } from "./common/Utils"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const config = {
    aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
    aws_appsync_region: awsconfig.aws_appsync_region,
    aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
    aws_user_pools_id: awsconfig.aws_user_pools_id,
    aws_user_pools_web_client_id: awsconfig.aws_user_pools_web_client_id,
    oauth: {
        domain: process.env.REACT_APP_OAUTH_DOMAIN,
        scope: ["email", "aws.cognito.signin.user.admin", "profile", "openid"],
        redirectSignIn: process.env.REACT_APP_OAUTH_REDIRECT_SIGNIN,
        redirectSignOut: process.env.REACT_APP_OAUTH_REDIRECT_SIGNOUT,
        responseType: "code"
    },
    Storage: {
        AWSS3: {
            bucket: awsconfig.aws_user_files_s3_bucket,
            region: awsconfig.aws_user_files_s3_bucket_region
        }
    }
}

Amplify.configure(config)
setupDataStore()

const history = createBrowserHistory()

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <BrowserRouter>{renderRoutes()}</BrowserRouter>
            </Router>
        </Provider>
    )
}

export default App
