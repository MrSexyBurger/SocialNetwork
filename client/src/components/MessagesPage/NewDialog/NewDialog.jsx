import React from "react";
import css from './NewDialog.module.css'
import NewDialogItmContainer from "./NewDialogItm/NewDialogItmContainer";

const NewDialog = props => {
    return (
        <div className={css.newDialogWrap}>
            <div className={css.newDialogHeader}>Создание беседы</div>
            <div className={css.newDialogItms}>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
                <NewDialogItmContainer/>
            </div>
        </div>
    )
}

export default NewDialog;