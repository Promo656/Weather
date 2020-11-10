import React from "react";
import {DegreePerDay} from "./DegreePerDay/DegreePerDay";
import s from "./AllDegreePerWeek.module.scss"
import {Weather_Daily_ObjectType} from "../../BLL/Redux/WeatherReducer";
import {Paper} from "@material-ui/core";

type AllDegreePerWeekPropsType = {
    daily: Weather_Daily_ObjectType[]
}

export function AllDegreePerWeek(props: AllDegreePerWeekPropsType) {
    return (
        <div className={s.wrap}>
            {props.daily.map(el => <Paper style={{margin:"5px"}}><DegreePerDay daily={el}/></Paper>)}
        </div>
    )
}