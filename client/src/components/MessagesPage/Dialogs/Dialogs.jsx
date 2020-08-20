import React from "react";
import css from "./Dialogs.module.css";
import DialogsItmContainer from "./DialogsItm/DialogsItmContainer";

const Dialogs = props => {
    return (
        <div className={css.dialogsWrap}>
            <div className={css.dialogsHeader}>Диалоги</div>
            <div className={css.dialogsItms}>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
                <DialogsItmContainer/>
            </div>
        </div>
    )
}

export default Dialogs;