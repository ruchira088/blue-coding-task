import React from "react"
import classNames from "classnames"

import "styles/radio-button.scss"

export default ({label, value, isChecked, onChange}) =>
(
    <div className="radio-button" onClick={() => onChange(value)}>
        <div className={classNames({checked: isChecked}, "radio-button-indicator")}/>
        <div className="radio-button-label">
            { label }
        </div>
    </div>
)