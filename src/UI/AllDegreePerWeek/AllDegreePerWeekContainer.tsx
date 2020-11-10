import React from "react";
import {AllDegreePerWeek} from "./AllDegreePerWeek";
import {connect} from "react-redux";
import {StateType} from "../../BLL/Redux/redux-store";
import {Weather_Daily_ObjectType} from "../../BLL/Redux/WeatherReducer";

type MSTP = {
    daily:Weather_Daily_ObjectType[]
}

type AllDegreePerWeekContainerPropsType = MSTP

class AllDegreePerWeekContainer extends React.Component<AllDegreePerWeekContainerPropsType> {
    render() {
        return <AllDegreePerWeek daily={this.props.daily}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    daily: state.weather.daily
})

export default connect(mapStateToProps, {})(AllDegreePerWeekContainer)