import React from "react";
import css from './MessagesPage.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import NewDialogContainer from "./NewDialog/NewDialogContainer";
import PageMenu from "./MessagesPageMenu/PageMenu";


const MessagesPage = props => {
    const dialogs = props.dialogs;
    const currentBlock = dialogs.currentBlock;
    const userInfo = dialogs.userInfo;

    return (
        <div className={css.messagesPageWrap}>
            <div className={css.messagesPageL}>
                {currentBlock === 'messages'     && <MessagesContainer  dialogs={dialogs}  />}
                {currentBlock === 'dialogs'      && <DialogsContainer dialogs={dialogs}    />}
                {currentBlock === 'createDialog' && <NewDialogContainer dialogs={dialogs}  />}
            </div>
            <div className={css.messagesPageR}>
                <PageMenu currentBlock={currentBlock} userInfo={userInfo} />
            </div>
        </div>
    )
}

export default MessagesPage;