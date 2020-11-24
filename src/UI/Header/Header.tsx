import React from "react";
import s from "./Header.module.scss"

type HeaderPropsType = {
    name: string
    weekday:string
    description: Array<string>
    temp: number
    icon: string
}

export function Header(props: HeaderPropsType) {
    return (
        <div className={s.wrap}>
            <div>{props.name}</div>
            <div>{props.weekday}</div>
            <div>{props.description}</div>
            <div>{props.temp} &#176;C</div>
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt=""/>
        </div>
    )
}