import React from 'react';
import './App.css';
import {AllDegreePerHour} from "./UI/AllDegreePerHour/AllDegreePerHour";
import {AllDegreePerWeek} from "./UI/AllDegreePerWeek/AllDegreePerWeek";
import HeaderContainer from "./UI/Header/HeaderContainer";
import {StateType} from "./BLL/Redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {SetInitializedTC} from "./BLL/Redux/AppReducer";
import AdditionalInformationContainer from "./UI/AdditionalInformation/AdditionalInformationContainer";
import {Paper} from "@material-ui/core";


type MSTP = {
    initialized: boolean
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
            <div>
                <HeaderContainer/>
                <Paper elevation={4} style={{margin: "0 10px"}}>
                    <AllDegreePerHour/>
                    <AllDegreePerWeek/>
                    <AdditionalInformationContainer/>
                </Paper>

            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {SetInitializedTC})
)(App)
