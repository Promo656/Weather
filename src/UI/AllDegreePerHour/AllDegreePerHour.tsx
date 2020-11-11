import React from "react";
import s from "./AllDegreePerHour.module.scss"
import {Weather_Hourly_ObjectType} from "../../BLL/Redux/WeatherReducer";
import {SingleDegree} from "./SingleDegree/SingleDegree";
import {Paper} from "@material-ui/core";

type AllDegreePerHourPropsType = {
    hourly: Weather_Hourly_ObjectType[]
}

export function AllDegreePerHour(props: AllDegreePerHourPropsType) {
    return (
        <div className={s.wrap}>
            {props.hourly.map((el, id) => <Paper key={id} style={{margin: "5px"}}><SingleDegree hourly={el}/> </Paper>)}
        </div>



    )
}