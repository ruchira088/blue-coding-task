import React from "react"
import InputSection from "./InputSection.jsx"
import RadioButtonGroup from "./RadioButtonGroup.jsx"

import "styles/widget-editor.scss"

const UNIT_OPTIONS = [{label: "C", value: "celsius"}, {label: "F", value: "fahrenheit"}]
const WIND_OPTIONS = [{label: "On", value: true}, {label: "OFF", value: false}]

export default React.createClass({

    getInitialState()
    {
        const [defaultUnitOption] = UNIT_OPTIONS
        const [defaultWindOption] = WIND_OPTIONS

        return {
            title: "",
            unit: defaultUnitOption.value,
            wind: defaultWindOption.value
        }
    },

    handleInputChange(fieldName)
    {
        return value =>
        {
            this.setState({[fieldName]: value})
        }
    },

    render()
    {
        const {title, unit, wind} = this.state

        return (
            <div className="widget-editor">

                <InputSection title="Title" className="input-title-section">
                    <input
                        value={title}
                        onChange={({target}) => this.handleInputChange("title")(target.value)}
                        className="title-field"
                    />
                </InputSection>

                <InputSection title="Unit" className="input-unit-section">
                    <RadioButtonGroup
                        selectedValue={unit}
                        options={UNIT_OPTIONS}
                        onChange={this.handleInputChange("unit")}
                    />
                </InputSection>

                <InputSection title="Wind" className="input-wind-section">
                    <RadioButtonGroup
                        selectedValue={wind}
                        options={WIND_OPTIONS}
                        onChange={this.handleInputChange("wind")}
                    />
                </InputSection>
            </div>
        )
    }
})