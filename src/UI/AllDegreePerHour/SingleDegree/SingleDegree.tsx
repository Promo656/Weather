import React from "react";
import s from "./SingleDegree.module.scss"
import {Weather_Hourly_ObjectType} from "../../../BLL/Redux/WeatherReducer";

type SingleDegreePropsType = {
    hourly: Weather_Hourly_ObjectType
}

export function SingleDegree(props:SingleDegreePropsType) {
    return (
        <span className={s.singleDegree}>
            <div>{props.hourly.dt}</div>
            <img src={`http://openweathermap.org/img/wn/${props.hourly.weather[0].icon}.png`} alt=""/>
            <div>{props.hourly.temp} &#176;C</div>
        </span>
    )
}