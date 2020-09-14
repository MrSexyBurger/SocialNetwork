import React from "react";
import css from "./EditPage.module.css";
import PageMenu from "./EditPageMenu/PageMenu";
import Info from "./Info/Info";
import Avatar from "./Avatar/Avatar";

const EditPage = props => {
    const currentSection = props.edit.currentSection

    return (
        <div className={css.editPageWrap}>
            <div className={css.editPageL}>
                {currentSection === 'info' && <Info/>}
                {currentSection === 'avatar' && <Avatar/>}
            </div>
            <div className={css.editPageR}>
                <PageMenu currentSection={currentSection} />
            </div>
        </div>
    )
}

export default EditPage;