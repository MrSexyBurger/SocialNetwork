import React from "react";
import ReduxStatusForm from "./StatusForm";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../redux/profile_reducer";

class StatusFormContainer extends React.Component {

    onSubmit = (formData) => {
        this.props.updateStatus(formData.status);
    }

    render() {
        return (
            <ReduxStatusForm status={this.props.status} onSubmit={this.onSubmit}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {updateStatus})(StatusFormContainer);