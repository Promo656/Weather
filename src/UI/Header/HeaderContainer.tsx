import React from "react";
import {Header} from "./Header";
import {StateType} from "../../BLL/Redux/redux-store";
import {connect} from "react-redux";
import {Paper} from "@material-ui/core";

type MSTP = {
    name: string
    weekday: string
    description: string
    temp: number
    icon: string
}

type HeaderContainerPropsType = MSTP

class HeaderContainer extends React.Component<any> {
    render() {
        return (
            <Paper style={{margin: "5px"}}>
                <Header
                    name={this.props.name}
                    weekday={this.props.weekday}
                    description={this.props.description}
                    temp={this.props.temp}
                    icon={this.props.icon}
                />
            </Paper>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    name: state.weather.timezone,
    weekday: state.weather.current.dt,
    description: state.weather.current.weather.map(el => el.description),
    temp: state.weather.current.temp,
    icon: state.weather.current.weather.map(el => el.icon)
})

export default connect(mapStateToProps, {})(HeaderContainer)