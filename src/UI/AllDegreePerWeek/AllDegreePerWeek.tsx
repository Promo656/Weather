import React from "react";
import {DegreePerDay} from "./DegreePerDay/DegreePerDay";
import s from "./AllDegreePerWeek.module.scss"

export function AllDegreePerWeek() {
    return (
        <div className={s.wrap}>
            <DegreePerDay/>
            <DegreePerDay/>
            <DegreePerDay/>
            <DegreePerDay/>
            <DegreePerDay/>
            <DegreePerDay/>
            <DegreePerDay/>
        </div>
    )
}