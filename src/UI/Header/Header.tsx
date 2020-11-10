import React from "react";
import s from "./Header.module.scss"

type HeaderPropsType = {
    name:string
    /*description:string*/
    temp:number
 /*   icon:string*/
}

export function Header(props:HeaderPropsType) {
    return (
        <div className={s.wrap}>
            <div>{props.name}</div>
           {/* <div>{props.description}</div>*/}
            <div>{props.temp}</div>
           {/* <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}  alt=""/>*/}
        </div>
    )
}