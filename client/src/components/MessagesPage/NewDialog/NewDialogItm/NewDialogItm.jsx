import React from "react";
import css from './NewDialogItm.module.css';
import avatar from '../../../../assets/images/avatar.jpg';


const NewDialogItm = props => {
    const isHover = props.isHover;
    return (
        <div className={css.newDialogItm + ' ' + (isHover ? css.hover : '') }
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover}
        >
            <img src={avatar} className={css.avatar}/>
            <div className={css.username}>Божена Бигун</div>
        </div>
    )
}

export default NewDialogItm;