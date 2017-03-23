import React from "react"
import {getCurrentLocation} from "services/location"
import {getWeather} from "services/weather"

export default React.createClass({

    getInitialState()
    {
        return {
            weatherData: null
        }
    },

    componentDidMount()
    {
        getCurrentLocation()
            .then(({coords}) =>
            {
                const {latitude, longitude} = coords
                return getWeather(latitude, longitude)
            })
            .then(weather =>
            {
                console.log(weather)
            })
            .catch(console.error)
    },

    render()
    {
        return (
            <div className="widget-container">
                Widget Container
            </div>
        )
    }
})