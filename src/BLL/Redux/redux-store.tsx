import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppReducer} from "./AppReducer";
import {WeatherReducer} from "./WeatherReducer";
import thunkMiddleware from "redux-thunk"

let reducers=combineReducers({
    app:AppReducer,
    weather:WeatherReducer
})

export const store=createStore(reducers, applyMiddleware(thunkMiddleware))
export type StateType=ReturnType<typeof reducers>

// @ts-ignore
window.store=store