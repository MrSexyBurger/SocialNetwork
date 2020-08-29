import React from "react";
import Messages from "./Messages";

class MessagesContainer extends React.Component {
    render() {
        let userInfo = this.props.dialogs.userInfo;
        let messages = this.props.dialogs.messages;

        return <Messages userInfo={userInfo} messages={messages} />
    }
}

export default MessagesContainer;