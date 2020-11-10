import {GetDataTC} from "./WeatherReducer";

type AppActionType = SetInitializedType

type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false
}

export const AppReducer = (state: initialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state,
                initialized: true
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
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const SetInitializedTC = () =>(dispatch: any) => {
    dispatch(GetDataTC())
    dispatch(SetInitializedAC())
}