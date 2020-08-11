import React from "react";
import css from "./Status.module.css";
import StatusFormContainer from "./StatusForm/StatusFormContainer";


const Status = (props) => {
    const isHover = props.isHover;
    return (
        <div className={css.statusWrap}>
            <button onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
                    onClick={props.updateStatusEdit(true)}
                    className={css.status + ' ' + (isHover ? css.hover: '')}
            >{props.status ? props.status : 'изменить статус'}</button>
            <StatusFormContainer status={props.status}/>
        </div>
    )
}

export default Status;