import React from "react";
import MessageForm from "./MessageForm";

class MessageFormContainer extends React.Component {

    onSubmit = (formData) => {
        console.log(formData)
    }

    render() {
        return <MessageForm onSubmit={this.onSubmit}/>
    }
}

export default MessageFormContainer;