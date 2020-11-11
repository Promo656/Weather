import {Dispatch} from "redux";
import {userAPI} from "../../DAL/API/api";
import {convertToReadableTime} from "../../Utilities/Utilities";

type AppActionType = GetDataType | TransformDataAT

const initialStateAll: WeatherTypeAll = {
    "lat": 0,
    "lon": 0,
    "timezone": "",
    "timezone_offset": 0,
    "current": {
        "dt": "",
        "sunrise": 0,
        "sunset": 0,
        "temp": 0,
        "feels_like": 0,
        "pressure": 0,
        "humidity": 0,
        "dew_point": 0,
        "uvi": 0,
        "clouds": 0,
        "visibility": 0,
        "wind_speed": 0,
        "wind_deg": 0,
        "weather": []
    },
    "minutely": [],
    "hourly": [],
    "daily": []
}

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
    "sunrise": number
    "sunset": number
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
    "dt": number
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
    "dt": number
    "sunrise": number
    "sunset": number
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


export const WeatherReducer = (state: WeatherTypeAll = initialStateAll, action: AppActionType): WeatherTypeAll => {
    switch (action.type) {
        case "GET_DATA": {

            return {
                ...state,
                //current: {...state.current, weather: state.current.weather.map(w => w.id === action.id ? {...w, main: '123'} : w)}
                lat: action.payload.lat,
                lon: action.payload.lon,
                timezone: action.payload.timezone,
                timezone_offset: action.payload.timezone_offset,
                current: {...action.payload.current, dt: convertToReadableTime(+action.payload.current.dt, 'weekday')},
                minutely: action.payload.minutely,
                hourly: [...action.payload.hourly, ],
                /*hourly: action.payload.hourly,*/
                daily: action.payload.daily
            }
        }
        case "TRANSFORM_DATA": {
            return {
                ...state,
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
//--------------------------------------TRANSFORM-DATA-AC-------------------------------
const TRANSFORM_DATA = "TRANSFORM_DATA"
export type TransformDataAT = {
    type: typeof TRANSFORM_DATA
    time: WeatherTypeAll
}
export const TransformDataAC = (time: WeatherTypeAll): TransformDataAT => ({
    type: TRANSFORM_DATA,
    time: time
})
//--------------------------------------GET-DATA-TC-------------------------------
export const GetDataTC = () => async (dispatch: Dispatch) => {
    let response = await userAPI.getCurrentWeather()
    dispatch(GetDataAC(response))

}