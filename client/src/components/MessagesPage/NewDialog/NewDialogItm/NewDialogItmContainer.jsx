import React from "react";
import NewDialogItm from "./NewDialogItm";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import {createDialog} from "../../../../redux/dialogs_reducer";
import {connect} from "react-redux";


class NewDialogItmContainer extends React.Component {

    render() {
        return <NewDialogItm {...this.props}/>
    }
}

export default compose(
    connect(null, {createDialog}),
    HoverBtn
)(NewDialogItmContainer);