import React from "react";
import css from './ShowMoreBtn.module.css';

const ShowMoreBtn = props => {
    return (
        <div className={css.showMoreBtnWrap}>
            <button className={css.showMoreBtn + ' ' + ( props.isHover ? css.hover : '')}
                    onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
                    onClick={props.toggleFullInfo}
            >{props.fullInfo ? 'Скрыть' : 'Показать'} подробную информацию</button>
        </div>
    )
}

export default ShowMoreBtn;