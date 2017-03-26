import React from "react"

const WeatherInfo = ({location, temperature, wind: {speed, deg}}) =>
(
    <div className="weather-info">
        <div className="weather-location">
            { location }
        </div>
        <div className="weather-temperature">
            { temperature }
        </div>
        <div className="wind-info">
            <div className="wind-speed">
                { speed }
            </div>
            <div className="wind-deg">
                { deg }
            </div>
        </div>
    </div>
)

export default ({title = "Untitled", location, temperature, icon, wind = {}}) =>
(
    <div className="weather-widget">
        <div className="weather-widget-header">
            <div className="widget-title">
                { title }
            </div>
        </div>
        <div className="weather-widget-body">
            <div className="widget-left-column">
                <div className="weather-icon" style={{backgroundImage: `url(${icon})`}}>
                </div>
            </div>
            <div className="widget-right-column">
                <WeatherInfo location={location} temperature={temperature} wind={wind}/>
            </div>
        </div>
    </div>
)