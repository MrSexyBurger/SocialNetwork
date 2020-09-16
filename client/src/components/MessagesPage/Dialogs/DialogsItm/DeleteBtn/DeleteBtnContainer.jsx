import React from "react";
import DeleteBtn from "./DeleteBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";
import {connect} from "react-redux";
import {deleteDialog} from "../../../../../redux/dialogs_reducer";

class DeleteBtnContainer extends React.Component {

    deleteDialog = (event) => {
        event.stopPropagation();
        this.props.deleteDialog(this.props.dialogId);
    }

    render() {
        return <DeleteBtn {...this.props} deleteDialog={this.deleteDialog} />
    }
}

export default compose(
    connect(null, {deleteDialog}),
    HoverBtn
)(DeleteBtnContainer);