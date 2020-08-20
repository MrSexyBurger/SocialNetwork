import React from "react";
import BackBtn from "./BackBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../hoc/HoverBtn";

class BackBtnContainer extends React.Component {
    render() {
        return <BackBtn {...this.props} />
    }
}

export default compose(HoverBtn)(BackBtnContainer);