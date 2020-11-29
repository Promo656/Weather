import React from 'react';
import s from './App.module.scss';
import HeaderContainer from './UI/Header/HeaderContainer';
import {StateType} from './BLL/Redux/redux-store';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {SetInitializedTC} from './BLL/Redux/AppReducer';
import AdditionalInformationContainer from './UI/AdditionalInformation/AdditionalInformationContainer';
import AllDegreePerHourContainer from './UI/AllDegreePerHour/AllDegreePerHourContainer';
import AllDegreePerWeekContainer from './UI/AllDegreePerWeek/AllDegreePerWeekContainer';
import {ComboBox} from './UI/AutoComlite';
import {userAPI} from './DAL/API/api';

type MSTP = {
    initialized: boolean
    icon: string
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
            return 'Loading'
        }
        return (
            <div className={s.app}>
                <div className={s.dropdown}>
                    <button className={s.dropbtn}>Menu</button>
                    <div className={s.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

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
