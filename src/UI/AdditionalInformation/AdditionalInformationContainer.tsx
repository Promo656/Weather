import React from "react";
import {AdditionalInformation} from "./AdditionalInformation";
import {StateType} from "../../BLL/Redux/redux-store";
import {connect} from "react-redux";

type MSTP = {
    speed: number
    pressure: number
    feels_like: number
    humidity: number
    sunrise: string
    sunset: string
}

type AdditionalInformationContainerPropsType = MSTP

class AdditionalInformationContainer extends React.Component<AdditionalInformationContainerPropsType> {
    render() {
        return <AdditionalInformation
            feels_like={this.props.feels_like}
            humidity={this.props.humidity}
            pressure={this.props.pressure}
            speed={this.props.speed}
            sunrise={this.props.sunrise}
            sunset={this.props.sunset}
        />


    }
}

const mapStateToProps = (state: StateType) => ({
    speed: state.weather.current.wind_speed,
    pressure: state.weather.current.pressure,
    feels_like: state.weather.current.feels_like,
    humidity: state.weather.current.humidity,
    sunrise: state.weather.current.sunrise,
    sunset: state.weather.current.sunset
})
export default connect(mapStateToProps, {})(AdditionalInformationContainer)