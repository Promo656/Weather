import React from "react";
import s from "./AdditionalInformation.module.scss"

type AdditionalInformationPropsType={
    speed: number
    pressure: number
    feels_like: number
    humidity: number
    timeConverter: (time: number) => void
}

export function AdditionalInformation(props:AdditionalInformationPropsType) {
 /*   const convert=props.timeConverter
    const unix=props.weather.sys.sunrise
    const time=convert(unix)*/

    return (
        <div className={s.wrap}>
            <div>
                <div>
                    <span>sunrise</span>
                    <div>6:56</div>
                </div>
                <div>
                    <span>wind</span>
                    <div>{props.speed} м/c</div>
                </div>
                <div>
                    <span>pressure</span>
                    <div>{props.pressure}</div>
                </div>
            </div>

            <div>
                <div>
                    <span>sunset</span>
                    <div>18:43</div>
                </div>
                <div>
                    <span>feels like</span>
                    <div>{props.feels_like}</div>
                </div>
                <div>
                    <span>humidity</span>
                    <div>{props.humidity}% </div>
                </div>
            </div>
        </div>
    )
}