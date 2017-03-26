import React from "react"
import {getCurrentLocation} from "services/location"
import {getWeather, getDirection, getWindSpeed} from "services/weather"
import {parseBoolean} from "libs/object"
import configJson from "../../config.json"
import Widget from "./Widget.jsx"

import "styles/widget.scss"

export default React.createClass({

    getInitialState()
    {
        return {
            city: undefined,
            temperature: undefined,
            icon: undefined,
            wind: undefined
        }
    },

    componentDidMount()
    {
        const {units, showWind} = this.getQueryParameters()

        getCurrentLocation()
            .then(({coords}) =>
            {
                const {latitude, longitude} = coords
                return getWeather(latitude, longitude, units)
            })
            .then(weatherData =>
            {
                const {name, wind, main: {temp}, weather: [conditions]} = weatherData
                const {path, extension} = configJson.apiServices.openWeather.icon

                this.setState({
                    city: name,
                    temperature: temp,
                    icon: `${path}/${conditions.icon}.${extension}`,
                    wind: parseBoolean(showWind) ? {
                            speed: getWindSpeed(units, wind.speed),
                            direction: getDirection(wind.deg)
                        } : undefined
                })
            })
            .catch(console.error)
    },

    getQueryParameters()
    {
        const {location} = this.props

        return location.query
    },

    render()
    {
        const {city, temperature, icon, wind} = this.state
        const {title} = this.getQueryParameters(location)

        return (
            <div className="widget-container">
                <Widget title={title} location={city} temperature={temperature} wind={wind} icon={icon}/>
            </div>
        )
    }
})