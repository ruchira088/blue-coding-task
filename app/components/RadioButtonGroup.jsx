import React from "react"
import RadioButton from "./RadioButton.jsx"

export default ({options, selectedValue, onChange}) =>
{
    const radioButtons = options.map(({label, value}, index) =>
        <RadioButton
            label={label}
            value={value}
            isChecked={selectedValue == value}
            onChange={() => onChange(value)}
            key={index}
        />
    )

    return (
        <div className="radio-button-group">
            { radioButtons }
        </div>
    )
}