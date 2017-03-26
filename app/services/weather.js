import axios from "axios"
import {getHead} from "libs/object"
import * as CONSTANTS from "constants/general"
import configJson from "../../config.json"

const createWeatherService = config => (latitudeValue, longitudeValue, units) =>
{
    const {apiKey, host, path, defaultUnits, unitFormats, queryParameters} = config.apiServices.openWeather
    const {latitude, longitude, appId} = queryParameters

    return axios.get(`${host}/${path}`, {
            params: {
                [latitude]: latitudeValue,
                [longitude]: longitudeValue,
                [appId]: apiKey,
                units: unitFormats.includes(units) ? units : defaultUnits
            }
        })
        .then(({data}) => data)
}

const convertMsToKmh = value => Math.round(value * CONSTANTS.SECONDS_IN_AN_HOUR / CONSTANTS.METERS_IN_KM)

export const getWeather = createWeatherService(configJson)

export const getDirection = degrees =>
    CONSTANTS.DIRECTIONS[Math.ceil((degrees - 22.5) / 45)] || getHead(CONSTANTS.DIRECTIONS)

export const getWindSpeed = (units, value) =>
    (units == CONSTANTS.UNITS.METRIC) ? `${convertMsToKmh(value)}kmph` : `${value}mph`

