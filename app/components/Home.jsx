import React from "react"
import {Link} from "react-router"
import {getWidgetsFromStorage} from "services/storage"
import {getPath, ROUTE_NAMES} from "../Router.jsx"
import EmbedCodePane from "./EmbedCodePane.jsx"
import WidgetPreview from "./WidgetPreview.jsx"

import "styles/home.scss"

export default React.createClass(
{
    getInitialState()
    {
        return {
            widgets: [],
            selected: undefined
        }
    },

    componentDidMount()
    {
        this.setState({widgets: getWidgetsFromStorage()})
    },

    onWidgetSelect(widget)
    {
        return event =>
        {
            event.preventDefault()
            this.setState({selected: widget})
        }
    },

    render()
    {
        const {widgets, selected} = this.state

        const widgetPreviews = widgets.map((widgetProps, index) =>
            <WidgetPreview
                {...widgetProps}
                selected={widgetProps == selected}
                onSelect={this.onWidgetSelect(widgetProps)}
                key={index}
            />
        )

        return (
            <div className="widget-home">

                <div className="widget-previews">
                    <div className="saved-widgets">
                        { widgetPreviews }
                    </div>
                    <div className="embed-code-container">
                        <EmbedCodePane {...selected}/>
                    </div>
                    <div className="empty-section"/>
                </div>

                <div className="widget-home-controls">
                    <Link to={getPath(ROUTE_NAMES.EDITOR)} className="create-widget-button">
                        Create widget
                    </Link>
                </div>
            </div>
        )
    }
})