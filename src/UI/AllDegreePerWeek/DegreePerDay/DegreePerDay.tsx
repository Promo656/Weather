import React from "react";
import s from "./DegreePerDay.module.scss"
import {Weather_Daily_ObjectType} from "../../../BLL/Redux/WeatherReducer";

type DegreePerDayPropsType={
    daily:Weather_Daily_ObjectType
}

export function DegreePerDay(props:DegreePerDayPropsType) {
    return (
        <div className={s.wrap}>
            <div>{props.daily.dt}</div>
            <img src={`http://openweathermap.org/img/wn/${props.daily.weather.map(el=>el.icon)}.png`} alt=""/>
            <div>{props.daily.temp.day} &#176;C</div>
        </div>
    )
}