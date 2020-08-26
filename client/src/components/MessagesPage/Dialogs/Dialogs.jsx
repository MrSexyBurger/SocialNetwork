import React from "react";
import css from "./Dialogs.module.css";
import DialogsItmContainer from "./DialogsItm/DialogsItmContainer";

const Dialogs = props => {

    let dialogs = props.dialogs.map(dialog => {
        return <DialogsItmContainer dialog={dialog} />
    })

    return (
        <div className={css.dialogsWrap}>
            <div className={css.dialogsHeader}>Диалоги</div>
            <div className={css.dialogsItms}>
                {dialogs}
            </div>
        </div>
    )
}

export default Dialogs;