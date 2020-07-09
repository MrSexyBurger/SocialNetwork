import React from "react";
import css from './Error.module.css';

const Error = (props) => {

    const btnClass = props.hover ?  `${css.errorBtn} + ' ' +  ${css.hover}` : css.errorBtn;
    let sizeClass = props.size == 'small' ? `${btnClass} ${css.small}` : `${btnClass} ${css.big}`;
    let errorBodyClass;

    if (props.size == 'small'){
        sizeClass = `${btnClass} ${css.small}`;
    } else if (props.size == 'big') {
        sizeClass = `${btnClass} ${css.big}`
    } else if (props.size == 'medium') {
        sizeClass = `${btnClass} ${css.medium}`
    }


    if (props.position == 'bottom') {
        errorBodyClass = `${css.errorBody} ${css.bottom}`;
    } else if (props.position == 'left') {
        errorBodyClass = `${css.errorBody} ${css.left}`;
    } else if (props.position == 'right'){
        errorBodyClass = `${css.errorBody} ${css.right}`;
    } else if (props.position == 'top') {
        errorBodyClass = `${css.errorBody} ${css.top}`;
    }


    return(
        <div className={css.errorWrap}>
            <div className={sizeClass}
                    onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
                    onClick={props.toggleError} >!</div>

            {props.errorOpend
                ? <div className={errorBodyClass}>{props.error}<span></span></div>
                : null
            }
        </div>
    )
}

export default Error;