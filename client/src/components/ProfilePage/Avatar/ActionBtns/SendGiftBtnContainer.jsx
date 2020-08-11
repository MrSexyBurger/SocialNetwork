import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import SendGiftBtn from "./SendGiftBtn";

class SendGiftBtnContainer extends React.Component {
    render() {
        return (
            <SendGiftBtn {...this.props}/>
        )
    }
}

export default compose(
    HoverBtn
)(SendGiftBtnContainer);