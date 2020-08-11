import React from "react";
import css from './SummaryItm.module.css';


const SummaryItm = props => {
    let itmName = props.itmName;

    switch (itmName) {
        case 'friends':{
            itmName = 'Друзья';
            break
        }
        default:
            break
    }


    return (
        <div className={css.summaryItm + ' ' + (props.isHover ? css.hover : '')}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover} >
            <div className={css.summaryNumber}>{props.itmCount}</div>
            <div className={css.summaryLabel}>{itmName}</div>
        </div>
    )
}

export default SummaryItm;