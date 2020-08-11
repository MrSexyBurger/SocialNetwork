import React from "react";
import {NavLink} from "react-router-dom";
import css from './ActionBtns.module.css';

const EditLink = props => {
    return (
        <NavLink to={'/edit'}
                 className={css.editBtn  + ' ' + (props.isHover ? css.hover : ' ')}
                 onMouseEnter={props.toggleHover}
                 onMouseLeave={props.toggleHover}>
            Редактировать
        </NavLink>
    )
}

export default EditLink;