import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import SubmitBtn from "./SubmitBtn";

class SubmitBtnContainer extends React.Component {
    render() {
        return <SubmitBtn {...this.props} />
    }
}

export default compose(HoverBtn)(SubmitBtnContainer);