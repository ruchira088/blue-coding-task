import React from "react"
import {httpPort} from "../../config.json"
import {ROUTE_NAMES, getPath} from "../Router.jsx"

import "styles/embed-code-pane.scss"

const getIFrameUrl = ({title, units, showWind}) =>
    `http://localhost:${httpPort}${getPath(ROUTE_NAMES.WIDGET)}?title=${title}&units=${units}&showWind=${showWind}`

const EmbedCodePaneBody = ({url}) =>
(
    <div className="embed-code">
        <iframe className="embed-code-preview" src={url}></iframe>
        <div className="embed-code-markup">
            <div className="embed-code-markup-title">
                Copy and paste the following code to embed the weather widget on any site
            </div>
            <textarea
                value={`<iframe src="${url}"></iframe>`}
                readOnly={true}
                className="embed-code-text"
                rows="5"
                cols="50"
            />
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