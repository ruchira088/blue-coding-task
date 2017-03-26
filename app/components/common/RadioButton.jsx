import React from "react"
import "styles/radio-button.scss"

export default ({label, value, isChecked, onChange}) =>
(
    <div className="radio-button">
        <input type="radio" checked={isChecked} value={value} onChange={onChange}/>
        <div className="radio-button-label">
            { label }
        </div>
    </div>
)