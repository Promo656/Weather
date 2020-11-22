import React from 'react';
import s from './App.module.scss';
import HeaderContainer from "./UI/Header/HeaderContainer";
import {StateType} from "./BLL/Redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {SetInitializedTC} from "./BLL/Redux/AppReducer";
import AdditionalInformationContainer from "./UI/AdditionalInformation/AdditionalInformationContainer";
import AllDegreePerHourContainer from "./UI/AllDegreePerHour/AllDegreePerHourContainer";
import AllDegreePerWeekContainer from "./UI/AllDegreePerWeek/AllDegreePerWeekContainer";
import brokenClouds from "./UI/bg/brokenClouds.jpg"

type MSTP = {
    initialized: boolean
    icon:string
}

type MDTP = {
    SetInitializedTC: () => void
}

type AppPropsType = MDTP & MSTP

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.SetInitializedTC()
    }

    render() {
        if (!this.props.initialized) {
            return "Loading"
        }

        return (
            <div className={s.app}>
                <HeaderContainer/>
                <AllDegreePerHourContainer/>
                <AllDegreePerWeekContainer/>
                <AdditionalInformationContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized,
    icon: state.app.dayIcon
})

export default compose(
    connect(mapStateToProps, {SetInitializedTC})
)(App)
