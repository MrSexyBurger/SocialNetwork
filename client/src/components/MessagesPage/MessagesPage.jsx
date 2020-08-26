import React from "react";
import css from './MessagesPage.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import NewDialogContainer from "./NewDialog/NewDialogContainer";

const MessagesPage = props => {
    let dialogs = props.dialogs
    let currentBlock = dialogs.currentBlock;

    return (
        <div className={css.messagesPageWrap}>
            <div className={css.messagesPageL}>
                {currentBlock === 'messages'   ? <MessagesContainer  dialogs={dialogs} />  : null}
                {currentBlock === 'dialogs'    ? <DialogsContainer dialogs={dialogs}   />   : null}
                {currentBlock === 'newDialogs' ? <NewDialogContainer dialogs={dialogs} /> : null}
            </div>
            <div className={css.messagesPageR}>

            </div>
        </div>
    )
}

export default MessagesPage;