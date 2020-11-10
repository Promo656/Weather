import React from "react";
import {AllDegreePerHour} from "./AllDegreePerHour";
import {connect} from "react-redux";
import {StateType} from "../../BLL/Redux/redux-store";
import {Weather_Hourly_ObjectType} from "../../BLL/Redux/WeatherReducer";

type MSTP = {
    hourly: Weather_Hourly_ObjectType[]
}

type AllDegreePerHourContainerPropsType = MSTP

class AllDegreePerHourContainer extends React.Component<AllDegreePerHourContainerPropsType> {
    render() {
        return <AllDegreePerHour hourly={this.props.hourly}/>

    }
}

const mapStateToProps = (state: StateType) => ({
    hourly: state.weather.hourly
})

export default connect(mapStateToProps, {})(AllDegreePerHourContainer)