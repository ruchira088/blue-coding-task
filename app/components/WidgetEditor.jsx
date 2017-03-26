import React from "react"
import {browserHistory} from "react-router"
import {addWidgetToStorage} from "services/storage"
import InputSection from "./common/InputSection.jsx"
import RadioButtonGroup from "./common/RadioButtonGroup.jsx"

import "styles/widget-editor.scss"

const UNIT_OPTIONS = [{label: "C", value: "metric"}, {label: "F", value: "imperial"}]
const WIND_OPTIONS = [{label: "On", value: true}, {label: "OFF", value: false}]

export default  React.createClass({

    getInitialState()
    {
        const [defaultUnitOption] = UNIT_OPTIONS
        const [defaultWindOption] = WIND_OPTIONS

        return {
            title: "",
            units: defaultUnitOption.value,
            showWind: defaultWindOption.value
        }
    },

    handleInputChange(fieldName)
    {
        return value =>
        {
            this.setState({[fieldName]: value})
        }
    },

    handleOkButtonClick(event)
    {
        const state = this.state

        event.preventDefault()
        addWidgetToStorage(state)
        browserHistory.push("/")
    },

    render()
    {
        const {title, units, showWind} = this.state

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
                        selectedValue={units}
                        options={UNIT_OPTIONS}
                        onChange={this.handleInputChange("units")}
                    />
                </InputSection>

                <InputSection title="Wind" className="input-wind-section">
                    <RadioButtonGroup
                        selectedValue={showWind}
                        options={WIND_OPTIONS}
                        onChange={this.handleInputChange("showWind")}
                    />
                </InputSection>

                <div className="widget-editor-controls">
                    <button onClick={this.handleOkButtonClick} type="button" className="widget-editor-button">
                        OK
                    </button>
                </div>
            </div>
        )
    }
})