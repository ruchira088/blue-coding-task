import React from "react"
import classNames from "classnames"

import "styles/widget-preview.scss"

export default ({title, units, showWind, onSelect, selected}) =>
(
    <div className={classNames({selected}, "widget-preview")} onClick={onSelect}>
        <div className="preview-title">
            { title }
        </div>
        <div className="preview-units">
            <div className="preview-label">
                Units
            </div>
            <div className="preview-value">
                { units }
            </div>
        </div>
        <div className="preview-wind">
            <div className="preview-label">
                Show wind
            </div>
            <div className="preview-value">
                { JSON.stringify(showWind) }
            </div>
        </div>
    </div>
)