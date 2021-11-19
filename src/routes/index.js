import React, { Suspense, lazy, Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import HomeLayout from "../layout"
import GuestProtect from "../components/guestProtect"
import AuthProtect from "../components/authProtect"

const loading = <div>Loading...</div>

const routes = [
    {
        exact: true,
        path: "/",
        component: lazy(() => import("../views/dashboard")),
        layout: HomeLayout,
        guard: GuestProtect
    },
    {
        exact: true,
        path: "/login",
        component: lazy(() => import("../views/login")),
        guard: AuthProtect
    }
]

export function renderRoutes() {
    return (
        <Suspense fallback={loading}>
            <Switch>
                {routes.map((route, i) => {
                    const Component = route.component
                    const Layout = route.layout || Fragment
                    const Guard = route.guard || Fragment
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        <Component {...props} />
                                    </Layout>
                                </Guard>
                            )}
                        />
                    )
                })}
            </Switch>
        </Suspense>
    )
}
