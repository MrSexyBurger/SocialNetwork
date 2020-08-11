import React from "react";
import ReduxStatusForm from "./StatusForm";
import {connect} from "react-redux";
import {updateStatus, updateStatusEdit} from "../../../../../redux/profile_reducer";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";

class StatusFormContainer extends React.Component {

    onSubmit = (formData) => {
        this.props.updateStatus(formData.status);
    }

    render() {
        if (this.props.statusEdit) return <ReduxStatusForm {...this.props} onSubmit={this.onSubmit} />
        return null
    }
}

const setStateToProps = state => {
    return {
        statusEdit: state.profile.statusEdit
    }
}

export default compose(
    connect(setStateToProps, {updateStatus, updateStatusEdit}),
    HoverBtn
)(StatusFormContainer);