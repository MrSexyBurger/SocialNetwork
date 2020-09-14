import React from "react";
import css from './Avatar.module.css';
import AvatarFormContainer from "./AvatarForm/AvatarFormContainer";
import AvatarPreviewContainer from "./AvatarPreview/AvatarPreviewContainer";

const Avatar = props => {
    return (
        <div className={css.avatarWrap}>
            <div className={css.avatarHeader}>Аватар</div>
            <div className={css.avatarContent}>
                <AvatarPreviewContainer/>
                <AvatarFormContainer/>
            </div>
        </div>
    )
}

export default Avatar;