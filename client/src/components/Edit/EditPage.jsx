import React from "react";
import css from "./EditPage.module.css";
import InfoContainer from "./Info/InfoContainer";
import PageMenu from "./EditPageMenu/PageMenu";

const EditPage = props => {
    const currentSection = props.edit.currentSection

    return (
        <div className={css.editPageWrap}>
            <div className={css.editPageL}>
                {currentSection === 'info' && <InfoContainer/>}
            </div>
            <div className={css.editPageR}>
                <PageMenu currentSection={currentSection} />
            </div>
        </div>
    )
}

export default EditPage;