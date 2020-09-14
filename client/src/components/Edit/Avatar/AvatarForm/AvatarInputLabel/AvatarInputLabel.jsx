import React from "react";
import css from './AvatarInputLabel.module.css';

const AvatarInputLabel = props => {
    const isHover = props.isHover;
    return (
        <div className={css.AvatarInputLabelWrap}>
            <label
                htmlFor={'avatarInput'}
                className={css.AvatarInputLabel + ' ' + (isHover ? css.hover : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
            >Выбрать файл
            </label>
        </div>
    )
}

export default AvatarInputLabel;