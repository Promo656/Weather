import React from "react";
import s from "./AdditionalInformation.module.scss"
import {Paper} from "@material-ui/core";

type AdditionalInformationPropsType={
    speed: number
    pressure: number
    feels_like: number
    humidity: number
    sunrise:string
    sunset:string
}

export function AdditionalInformation(props:AdditionalInformationPropsType) {

    return (
        <div className={s.wrap}>
            <Paper className={s.blockWrap}>
                <div className={s.singleBlock}>
                    <span>sunrise</span>
                    <div>{props.sunrise}</div>
                </div>
                <div className={s.singleBlock}>
                    <span>wind</span>
                    <div>{props.speed} м/c</div>
                </div>
                <div className={s.singleBlock}>
                    <span>pressure</span>
                    <div>{props.pressure}</div>
                </div>
            </Paper>

            <Paper className={s.blockWrap}>
                <div className={s.singleBlock}>
                    <span>sunset</span>
                    <div>{props.sunset}</div>
                </div>
                <div className={s.singleBlock}>
                    <span>feels like</span>
                    <div>{props.feels_like}</div>
                </div>
                <div className={s.singleBlock}>
                    <span>humidity</span>
                    <div>{props.humidity}% </div>
                </div>
            </Paper>
        </div>
    )
}