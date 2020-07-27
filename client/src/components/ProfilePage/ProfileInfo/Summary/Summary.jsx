import React from "react";
import css from "./Summary.module.css";

const Summary = (props) => {
    return (
        <div className={css.summary}>
            <div className={css.summaryItm + ' ' + (props.state.friendsHover ? css.hover : '')} onMouseEnter={props.toggleHover('friends')} onMouseLeave={props.toggleHover()} >
                <div className={css.summaryNumber}>1714</div>
                <div className={css.summaryLabel}>друга</div>
            </div>
            <div className={css.summaryItm + ' ' + (props.state.followersHover ? css.hover : '')} onMouseEnter={props.toggleHover('followers')} onMouseLeave={props.toggleHover()}>
                <div className={css.summaryNumber}>666</div>
                <div className={css.summaryLabel}>подписчиков</div>
            </div>
            <div className={css.summaryItm + ' ' + (props.state.photosHover ? css.hover : '')} onMouseEnter={props.toggleHover('photos')} onMouseLeave={props.toggleHover()}>
                <div className={css.summaryNumber}>312</div>
                <div className={css.summaryLabel}>фотографий</div>
            </div>
            <div className={css.summaryItm + ' ' + (props.state.videosHover ? css.hover : '')} onMouseEnter={props.toggleHover('videos')} onMouseLeave={props.toggleHover()}>
                <div className={css.summaryNumber}>100</div>
                <div className={css.summaryLabel}>видеозаписей</div>
            </div>
            <div className={css.summaryItm + ' ' + (props.state.presentsHover ? css.hover : '')} onMouseEnter={props.toggleHover('presents')} onMouseLeave={props.toggleHover()}>
                <div className={css.summaryNumber}>37</div>
                <div className={css.summaryLabel}>подарков</div>
            </div>
        </div>
    )
}

export default Summary;