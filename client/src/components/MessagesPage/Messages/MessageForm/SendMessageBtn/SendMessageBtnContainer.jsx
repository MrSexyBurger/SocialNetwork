import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";
import SendMessageBtn from "./SendMessageBtn";

class SendMessageBtnContainer extends React.Component {
    render() {
        return <SendMessageBtn {...this.props} />
    }
}

export default compose(HoverBtn)(SendMessageBtnContainer);