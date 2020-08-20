import React from "react";
import DeleteBtn from "./DeleteBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";

class DeleteBtnContainer extends React.Component {
    render() {
        return <DeleteBtn {...this.props} />
    }
}

export default compose(HoverBtn)(DeleteBtnContainer);