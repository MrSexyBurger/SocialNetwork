import React from "react";
import css from "./Status.module.css";
import StatusFormContainer from "./StatusForm/StatusFormContainer";
import {toggleStatusForm} from "../../../../redux/profile_reducer";


const Status = (props) => {
    const isHover = props.state.btnHover;
    const isMenuOpen = props.state.isMenuOpen;

    return (
        <div className={css.statusWrap}>
            <button onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
                    onClick={props.openForm}
                    className={css.status + ' ' + (isHover ? css.hover: '')}
            >{props.status ? props.status : 'изменить статус'}</button>
            {props.statusForm && <StatusFormContainer status={props.status ? props.status : null}/>}
        </div>
    )
}

export default Status;