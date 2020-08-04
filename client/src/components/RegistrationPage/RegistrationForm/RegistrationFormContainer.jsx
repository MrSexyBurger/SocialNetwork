import React from "react";
import {connect} from "react-redux";
import RegistrationReduxForm from "./RegistrationForm";
import {reg} from "../../../redux/auth_reducer";


class RegistrationFormContainer extends React.Component {
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

        const username = `${formData.firstName} ${formData.surname}`;
        const email = formData.email;
        const password = formData.password;
        const birth = `${formData.day}.${formData.month}.${formData.year}`;
        const gender = formData.gender;

        this.props.reg(username, email, password, gender, birth);

    }

    render(){
        return(
            <RegistrationReduxForm test={this.props.test}
                                   onSubmit={this.onSubmit}
                                   isHover={this.state.hover}
                                   toggleHover={this.toggleHover}
            />
        )

    }
}

const mapStateToProps = (state) => {
    return {
        test: '123'
    }
}

export default connect(mapStateToProps, {reg})(RegistrationFormContainer);