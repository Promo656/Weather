import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppReducer} from "./AppReducer";
import {WeatherReducer} from "./WeatherReducer";
import thunkMiddleware from "redux-thunk"
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

let reducers = combineReducers({
    app: AppReducer,
    weather: WeatherReducer
})

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
})

export const store = configureStore({
    reducer: {...reducers},
    middleware,
    devTools: process.env.NODE_ENV !== "production"
})

//export const store=createStore(reducers, applyMiddleware(thunkMiddleware))
export type StateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store