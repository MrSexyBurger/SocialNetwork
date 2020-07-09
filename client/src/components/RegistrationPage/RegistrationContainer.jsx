import React from "react";
import Registration from "./Registration";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



class RegistrationContainer extends React.Component {

    render(){
        if (this.props.isAuth) return <Redirect to={'/profile'} />
        return <Registration />
    }


}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(RegistrationContainer);

