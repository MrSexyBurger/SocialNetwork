import React from "react";
import css from './NewDialog.module.css'
import NewDialogItmContainer from "./NewDialogItm/NewDialogItmContainer";

const NewDialog = props => {
    const newDialogs = props.newDialogs.map(dialog => {
        return (
            <NewDialogItmContainer username={dialog.username}
                                   avatar={dialog.avatar}
                                   id={dialog.id}
            />
        )
    })


    return (
        <div className={css.newDialogWrap}>
            <div className={css.newDialogHeader}>Создание беседы</div>
            <div className={css.newDialogItms}>
                {newDialogs}
            </div>
        </div>
    )
}

export default NewDialog;