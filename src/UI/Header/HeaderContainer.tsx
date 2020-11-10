import React from "react";
import {Header} from "./Header";
import {StateType} from "../../BLL/Redux/redux-store";
import {connect} from "react-redux";

type MSTP={
    name:string
/*    description:string*/
    temp:number
/*    icon:string*/
}

type HeaderContainerPropsType=MSTP

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header
                name={this.props.name}
              /*  description={this.props.description}*/
                temp={this.props.temp}
                /*icon={this.props.icon}*/
            />
        )
    }
}

const mapStateToProps=(state:StateType)=>({
    name:state.weather.timezone,
   /* description:state.weather.current.weather[0].description,*/
    temp:state.weather.current.temp,
    /*icon:state.weather.current.weather[0].icon*/
})

export default connect(mapStateToProps,{})(HeaderContainer)