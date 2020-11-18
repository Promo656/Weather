import {GetDataTC} from "./WeatherReducer";
import {Dispatch} from "redux";
import {StateType} from "./redux-store";

type AppActionType = SetInitializedType | SetBackgroundPhotoAT

type initialStateType = {
    initialized: boolean
    dayIcon: string
}

const initialState: initialStateType = {
    initialized: false,
    dayIcon: ""
}

export const AppReducer = (state: initialStateType = initialState, action: AppActionType): initialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        case "SET_BACKGROUND_PHOTO":{
            return {
                ...state,
                dayIcon:action.id
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-INITIALIZED-AC-------------------------------
const SET_INITIALIZED = "SET_INITIALIZED"
export type SetInitializedType = {
    type: typeof SET_INITIALIZED
}
export const SetInitializedAC = (): SetInitializedType => ({
    type: SET_INITIALIZED
})
//--------------------------------------SET-BACKGROUND-AC-------------------------------
const SET_BACKGROUND_PHOTO = "SET_BACKGROUND_PHOTO"
export type SetBackgroundPhotoAT = {
    type: typeof SET_BACKGROUND_PHOTO
    id: string
}
export const SetBackgroundPhotoAC = (id: string): SetBackgroundPhotoAT => ({
    type: SET_BACKGROUND_PHOTO,
    id: id
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const SetInitializedTC = (state: StateType) => (dispatch: Dispatch<any>) => {
    dispatch(GetDataTC())

    dispatch(SetBackgroundPhotoAC(state.weather.current.weather[0].icon))

    dispatch(SetInitializedAC())
}