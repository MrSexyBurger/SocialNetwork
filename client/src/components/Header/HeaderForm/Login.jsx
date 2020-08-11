import React from "react";
import {connect} from "react-redux";
import {login} from "../../../redux/auth_reducer";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import LoginReduxForm from "./LoginForm";

const maxLength50 = maxLengthCreator(50);

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password);
    }

    render(){
        return (
            <LoginReduxForm onSubmit={this.onSubmit} isHover={this.state.hover} toggleHover={this.toggleHover} />
        )
    }

}


const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {login})(Login)

