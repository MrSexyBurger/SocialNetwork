import React from "react";
import ReduxStatusForm from "./StatusForm";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../redux/profile_reducer";

class StatusFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    }

    toggleHover = () => {
        this.setState({isHover: !this.state.isHover})
    }

    onSubmit = (formData) => {
        this.props.updateStatus(formData.status);
    }

    render() {
        return (
            <ReduxStatusForm isHover={this.state.isHover}
                             toggleHover={this.toggleHover}
                             status={this.props.status}
                             onSubmit={this.onSubmit}/>
        )
    }
}

export default connect(null, {updateStatus})(StatusFormContainer);