import React from "react";
import Messages from "./Messages";
import {onNewMessage} from "../../../api/api";
import {connect} from "react-redux";
import {putNewMessage} from "../../../redux/dialogs_reducer";

class MessagesContainer extends React.Component {

    componentDidMount() {
        let dialogId = this.props.dialogId;
        onNewMessage(dialogId, this.props.putNewMessage);
        //console.log(this.props.dialogId)
    }

    render() {
        let userInfo = this.props.dialogs.userInfo;
        let messages = this.props.dialogs.messages;

        return <Messages userInfo={userInfo} messages={messages} />
    }
}

const mapStateToProps = state => {
    return {
        dialogId: state.dialogs.dialogId
    }
}

export default connect(mapStateToProps, {putNewMessage})(MessagesContainer);