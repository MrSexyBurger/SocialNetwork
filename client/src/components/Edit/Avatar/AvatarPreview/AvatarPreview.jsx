import React from "react";
import css from './AvatarPreview.module.css';

const AvatarPreview = props => {
    const avatarBG = {
        backgroundImage: `url(${props.avatar})`
    }

    return <div className={css.AvatarPreview} style={avatarBG}></div>
}

export default AvatarPreview;