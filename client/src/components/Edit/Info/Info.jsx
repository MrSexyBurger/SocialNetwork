import React from "react";
import css from './Info.module.css';
import InfoFormContainer from "./InfoForm/InfoFormContainer";

const Info = props => {
    return (
        <div className={css.infoWrap}>
            <div className={css.infoHeader}>Информация</div>
            <InfoFormContainer/>
        </div>
    )
}

export default Info;