import React from "react";
import NewDialogItm from "./NewDialogItm";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";

class NewDialogItmContainer extends React.Component {
    render() {
        return <NewDialogItm {...this.props}/>
    }
}

export default compose(HoverBtn)(NewDialogItmContainer);