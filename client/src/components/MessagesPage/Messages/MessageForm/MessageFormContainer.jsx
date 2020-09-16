import React from "react";
import MessageForm from "./MessageForm";
import {connect} from "react-redux";
import {putMessage} from "../../../../redux/dialogs_reducer";

class MessageFormContainer extends React.Component {

    onSubmit = (formData) => {
        let dialogId = this.props.dialogs.dialogId;
        let recipientId = this.props.dialogs.userInfo.id;
        let message = formData.message;

        this.props.putMessage(dialogId, recipientId, message);

        /*let messageObj = {
            dialogId,
            recipientId
        }*/

        //emitNewMessage(messageObj);
    }

    render() {
        return <MessageForm onSubmit={this.onSubmit}/>
    }
}

const mapStateToProps = state => {
    return {
        dialogs: state.dialogs
    }
}


export default connect(mapStateToProps, {putMessage})(MessageFormContainer);