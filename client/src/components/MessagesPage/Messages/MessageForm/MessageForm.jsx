import React from "react";
import {Field, reduxForm} from "redux-form";
import css from './MessageForm.module.css';
import {required} from "../../../../utils/validators/validators";
import {messageInput} from "../../../common/FormsControls/FormsControls";
import SendMessageBtnContainer from "./SendMessageBtn/SendMessageBtnContainer";

let MessageForm = props => {
    return (
        <div className={css.messageFormWrap}>
            <form className={css.messageForm} onSubmit={props.handleSubmit}>
                <Field name={'message'} validate={required} placeholder={'Напишите сообщение...'} component={messageInput} />
                <SendMessageBtnContainer/>
            </form>
        </div>

        )
}

MessageForm = reduxForm({form: 'message'})(MessageForm);

export default MessageForm;