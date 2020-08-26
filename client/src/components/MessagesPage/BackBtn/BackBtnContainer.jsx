import React from "react";
import BackBtn from "./BackBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../hoc/HoverBtn";
import {connect} from "react-redux";
import {setCurrentBlock} from "../../../redux/dialogs_reducer";

class BackBtnContainer extends React.Component {
    render() {
        return <BackBtn {...this.props} />
    }
}

export default compose(
    connect(null, {setCurrentBlock}),
    HoverBtn
)(BackBtnContainer);