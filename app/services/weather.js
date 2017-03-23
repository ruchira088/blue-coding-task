import axios from "axios"
import configJson from "../../config.json"

const createWeatherService = config => (latitudeValue, longitudeValue) =>
{
    const {apiKey, host, path, queryParameters} = config.apiServices.openWeather
    const {latitude, longitude, appId} = queryParameters

    return axios.get(`${host}/${path}`, {
            params: {
                [latitude]: latitudeValue,
                [longitude]: longitudeValue,
                [appId]: apiKey
            }
        })
        .then(({data}) => data)
}

export const getWeather = createWeatherService(configJson)