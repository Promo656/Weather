import React from "react";
import s from "./SingleDegree.module.scss"

export function SingleDegree() {
    return (
        <span className={s.singleDegree}>
            <div>
                12:00
            </div>
            <div>
                Logo
            </div>
            <div>
                15
            </div>
        </span>
    )
}