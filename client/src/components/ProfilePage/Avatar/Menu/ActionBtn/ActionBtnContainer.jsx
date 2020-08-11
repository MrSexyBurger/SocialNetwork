import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";
import ActionBtn from "./ActionBtn";

class ActionBtnContainer extends React.Component {

    render() {
        return (
            <ActionBtn {...this.props}/>
        )
    }
}

export default compose(
    HoverBtn
)(ActionBtnContainer);