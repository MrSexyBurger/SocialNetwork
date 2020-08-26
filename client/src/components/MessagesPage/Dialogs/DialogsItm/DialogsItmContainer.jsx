import React from "react";
import DialogsItm from "./DialogsItm";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import {getDialog} from "../../../../redux/dialogs_reducer";
import {connect} from "react-redux";

class DialogsItmContainer extends React.Component {
    render() {
        return <DialogsItm {...this.props}/>
    }
}

export default compose(
    connect(null, {getDialog}),
    HoverBtn
)(DialogsItmContainer);