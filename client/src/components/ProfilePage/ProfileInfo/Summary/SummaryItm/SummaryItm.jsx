import React from "react";
import css from './SummaryItm.module.css';


const SummaryItm = props => {
    const isHover = props.isHover;
    let itmName = props.itmName;
    const count = props.count;

    switch (itmName) {
        case 'friends':{
            itmName = 'Друзья';
            break
        }
        default:
            break
    }


    return (
        <div className={css.summaryItm + ' ' + (isHover ? css.hover : '')}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover} >
            <div className={css.summaryNumber}>{count}</div>
            <div className={css.summaryLabel}>{itmName}</div>
        </div>
    )
}

export default SummaryItm;