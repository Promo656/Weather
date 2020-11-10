import React from "react";
import {AdditionalInformation} from "./AdditionalInformation";
import {StateType} from "../../BLL/Redux/redux-store";
import {connect} from "react-redux";

type MSTP = {
    speed: number
    pressure: number
    feels_like: number
    humidity: number
}
type MDTP = {
    timeConverter: (time: number) => void
}

type AdditionalInformationContainerPropsType = MSTP & MDTP

export function timeConverter(UNIX_timestamp: number) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = {date: date, month: month, year: year, hour: hour, min: min, sec: sec};
    return time.hour;
}

class AdditionalInformationContainer extends React.Component<AdditionalInformationContainerPropsType> {
    componentDidMount() {

    }

    render() {
        return (
            <AdditionalInformation
                timeConverter={timeConverter}
                feels_like={this.props.feels_like}
                humidity={this.props.humidity}
                pressure={this.props.pressure}
                speed={this.props.speed}
            />
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    speed: state.weather.current.wind_speed,
    pressure: state.weather.current.pressure,
    feels_like: state.weather.current.feels_like,
    humidity: state.weather.current.humidity,

})
export default connect(mapStateToProps, {timeConverter})(AdditionalInformationContainer)