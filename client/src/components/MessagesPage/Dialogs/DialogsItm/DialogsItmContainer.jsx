import React from "react";
import DialogsItm from "./DialogsItm";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";

class DialogsItmContainer extends React.Component {
    render() {
        return <DialogsItm {...this.props}/>
    }
}

export default compose(HoverBtn)(DialogsItmContainer);