import React from "react"

const TemperatureDisplay = ({temperature}) =>
{
    if(temperature != undefined)
    {
        return (
            <div className="temperature-display">
                { temperature }&deg;
            </div>
        )
    } else
    {
        return null
    }
}

const WindInfo = ({speed, direction}) =>
{
    if(speed != undefined)
    {
        return (
            <div className="wind-info">
                <div className="wind-info-label">
                    Wind
                </div>
                <div className="wind-info-value">
                    { direction } { speed }
                </div>
            </div>
        )
    } else
    {
        return null
    }
}

const WeatherInfo = ({location, temperature, wind: {speed, direction}}) =>
{
    return (
        <div className="weather-info">
            <div className="weather-location">
                { location }
            </div>
            <TemperatureDisplay temperature={temperature}/>
            <WindInfo speed={speed} direction={direction}/>
        </div>
    )
}

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