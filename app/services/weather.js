import axios from "axios"
import configJson from "../../config.json"

const createWeatherService = config => (latitudeValue, longitudeValue, units) =>
{
    const {apiKey, host, path, unitFormats, queryParameters} = config.apiServices.openWeather
    const {latitude, longitude, appId} = queryParameters
    const [defaultUnits] = unitFormats

    return axios.get(`${host}/${path}`, {
            params: {
                [latitude]: latitudeValue,
                [longitude]: longitudeValue,
                [appId]: apiKey,
                units: units || defaultUnits
            }
        })
        .then(({data}) => data)
}

export const getWeather = createWeatherService(configJson)