import React from "react"
import {Router, Route, browserHistory} from "react-router"
import WidgetEditor from "./components/WidgetEditor.jsx"
import WidgetContainer from "./components/WidgetContainer.jsx"
import Home from "./components/Home.jsx"

export const ROUTE_NAMES = {
    HOME: "home",
    EDITOR: "editor",
    WIDGET: "widget"
}

const ROUTES = [
    {
        name: ROUTE_NAMES.HOME,
        path: "/",
        component: Home
    },
    {
        name: ROUTE_NAMES.EDITOR,
        path: "/editor",
        component: WidgetEditor
    },
    {
        name: ROUTE_NAMES.WIDGET,
        path: "/widget",
        component: WidgetContainer
    }
]

export const getPath = name => ROUTES.find(route => route.name == name).path

export default () =>
{
    const routes = ROUTES.map(({path, component}, index) =>
        <Route path={path} component={component} key={index}/>)

    return (
        <Router history={browserHistory}>
            {routes}
        </Router>
    )
}