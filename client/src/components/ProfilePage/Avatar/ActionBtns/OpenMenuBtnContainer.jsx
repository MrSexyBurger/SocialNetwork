import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import OpenMenuBtn from "./OpenMenuBtn";

class OpenMenuBtnContainer extends React.Component {
    render() {
        return (
            <OpenMenuBtn {...this.props}/>
        )
    }
}

export default compose(
    HoverBtn
)(OpenMenuBtnContainer);