import {Dispatch} from "redux";
import {userAPI} from "../../DAL/API/api";
import {convertToReadableTime} from "../../Utilities/Utilities";

type AppActionType = GetDataType

export type WeatherTypeAll = {
    "lat": number
    "lon": number
    "timezone": string
    "timezone_offset": number
    "current": Weather_currentType
    "minutely": Weather_Minutely_ObjectType[]
    "hourly": Weather_Hourly_ObjectType[]
    "daily": Weather_Daily_ObjectType[]
}
type Weather_currentType = {
    "dt": string
    "sunrise": string
    "sunset": string
    "temp": number
    "feels_like": number
    "pressure": number
    "humidity": number
    "dew_point": number
    "uvi": number
    "clouds": number
    "visibility": number
    "wind_speed": number
    "wind_deg": number
    "weather": Weather_Current_Weather_ObjectType[]
}
type Weather_Current_Weather_ObjectType = {
    "id": number
    "main": string
    "description": string
    "icon": string
}

type Weather_Minutely_ObjectType = {
    "dt": number,
    "precipitation": number
}

export type Weather_Hourly_ObjectType = {
    "dt": string
    "temp": number
    "feels_like": number
    "pressure": number
    "humidity": number
    "dew_point": number
    "clouds": number
    "visibility": number
    "wind_speed": number
    "wind_deg": number
    "pop": number
    "weather": Weather_Hourly_Object_Weather_ObjectType[]
}
type Weather_Hourly_Object_Weather_ObjectType = {
    "id": number
    "main": string
    "description": string
    "icon": string
}

export type Weather_Daily_ObjectType = {
    "dt": string
    "sunrise": string
    "sunset": string
    "pressure": number
    "humidity": number
    "dew_point": number
    "wind_speed": number
    "wind_deg": number
    "clouds": number
    "pop": number
    "rain": number
    "uvi": number
    "feels_like": Weather_Daily_Object_FeelsLikeType
    "temp": Weather_Daily_Object_TempType
    "weather": Weather_Daily_Object_Weather_ObjectType[]
}
type Weather_Daily_Object_FeelsLikeType = {
    "day": number
    "night": number
    "eve": number
    "morn": number
}
type Weather_Daily_Object_TempType = {
    "day": number
    "min": number
    "max": number
    "night": number
    "eve": number
    "morn": number
}
type Weather_Daily_Object_Weather_ObjectType = {
    "id": number
    "main": string
    "description": string
    "icon": string
}

const initialStateAll: WeatherTypeAll = {
    lat: 0,
    lon: 0,
    timezone: "",
    timezone_offset: 0,
    current: {
        dt: "",
        sunrise: "",
        sunset: "",
        temp: 0,
        feels_like: 0,
        pressure: 0,
        humidity: 0,
        dew_point: 0,
        uvi: 0,
        clouds: 0,
        visibility: 0,
        wind_speed: 0,
        wind_deg: 0,
        weather: []
    },
    minutely: [],
    hourly: [],
    daily: []
}

export const WeatherReducer = (state: WeatherTypeAll = initialStateAll, action: AppActionType): WeatherTypeAll => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state,
                ...action.payload,
                current: {
                    ...action.payload.current,
                    dt: convertToReadableTime(action.payload.current.dt, "weekday"),
                    sunrise: convertToReadableTime(action.payload.current.sunrise, "hour+minute"),
                    sunset: convertToReadableTime(action.payload.current.sunset, "hour+minute")
                },
                daily: action.payload.daily.map(day => ({
                    ...day,
                    dt: convertToReadableTime(day.dt, "weekday"),
                })),
                hourly: action.payload.hourly.map((hour) => ({
                    ...hour,
                    dt: convertToReadableTime(hour.dt, "hour")
                }))
            }
        }

        default:
            return state
    }
}
//--------------------------------------GET-DATA-AC-------------------------------
const GET_DATA = "GET_DATA"
export type GetDataType = {
    type: typeof GET_DATA
    payload: WeatherTypeAll
}
export const GetDataAC = (payload: WeatherTypeAll): GetDataType => ({
    type: GET_DATA,
    payload: payload
})
//--------------------------------------GET-DATA-TC-------------------------------
export const GetDataTC = () => async (dispatch: Dispatch) => {
    let response = await userAPI.getCurrentWeather()
    dispatch(GetDataAC(response))
}