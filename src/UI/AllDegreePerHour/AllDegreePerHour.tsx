import {SingleDegree} from "./SingleDegree/SingleDegree";
import React from "react";
import s from "./AllDegreePerHour.module.scss"

export function AllDegreePerHour() {
    return (
        <div className={s.wrap}>

            <SingleDegree/>
            <SingleDegree/>
            <SingleDegree/>
            <SingleDegree/>
            <SingleDegree/>
            <SingleDegree/>
            <SingleDegree/>
        </div>
    )
}