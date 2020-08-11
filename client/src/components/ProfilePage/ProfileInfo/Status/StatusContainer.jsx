import React from "react";
import Status from "./Status";
import {connect} from "react-redux";
import {updateStatusEdit} from "../../../../redux/profile_reducer";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";

class StatusContainer extends React.Component{

    render() {
        return (
            <Status {...this.props} state={this.state} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        statusEdit: state.profile.statusEdit,
        status: state.profile.status
    }
}

export default compose(
    connect(mapStateToProps, {updateStatusEdit}),
    HoverBtn
)(StatusContainer)

