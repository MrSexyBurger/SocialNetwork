import React from "react";
import Messages from "./Messages";

class MessagesContainer extends React.Component {
    render() {
        return <Messages {...this.props} />
    }
}

export default MessagesContainer;