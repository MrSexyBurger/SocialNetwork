import React from "react";
import css from './MessagesPage.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import NewDialogContainer from "./NewDialog/NewDialogContainer";

const MessagesPage = props => {
    return (
       /* <div className={css.friendsPageWrap}>
            <div className={css.friendsPageL}>
                <div className={css.friendliest}>
                    <div className={css.header}>
                        Поиск друзей
                        <button className={css.extSearch}>Расширенный поиск</button>
                    </div>
                    <UsersContainer/>
                </div>
            </div>
            <div className={css.friendsPageR}>
                <PageMenuContainer/>
            </div>
        </div>*/
        <div className={css.messagesPageWrap}>
            <div className={css.messagesPageL}>
                <MessagesContainer/>
                {/*<DialogsContainer/>*/}
                {/*<NewDialogContainer/>*/}
            </div>
            <div className={css.messagesPageR}>

            </div>
        </div>
    )
}

export default MessagesPage;