import React from "react"
import classNames from "classnames"

export default ({title, children, className}) =>
(
    <div className={classNames("input-section", className)}>
        <div className="input-section-title">
            { title }
        </div>
        <div className="input-section-field">
            { children }
        </div>
    </div>
)
