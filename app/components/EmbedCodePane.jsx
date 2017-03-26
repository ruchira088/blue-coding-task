import React from "react"
import {ROUTE_NAMES, getPath} from "../Router.jsx"

const getIFrameUrl = ({title, units, showWind}) =>
    `${getPath(ROUTE_NAMES.WIDGET)}?title=${title}&units=${units}&showWind=${showWind}`

const EmbedCodePaneBody = ({url}) =>
(
    <div className="embed-code">
        <iframe src={url}></iframe>
        <div className="embed-code-markup">
            { `<iframe src="${url}"></iframe>` }
        </div>
    </div>
)

export default props =>
{
    const body = props.units != undefined ?
        <EmbedCodePaneBody url={getIFrameUrl(props)}/> : null

    return (
        <div className="embed-code-pane">
            { body }
        </div>
    )
}