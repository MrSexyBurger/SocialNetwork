import React from "react";
import css from "./PostMenu.module.css";
import arrow from "../../../../../assets/images/arrow.svg";
import PostMenuContainer from "./PostMenuContainer";

const PostMenuBtn = (props) => {

    let active = '';

    if (props.state.isMenuOpened){
        active = css.active;
    } else if (props.state.isHover){
        active = css.hover;
    }

    return (
        <div>
            <button className={css.postMenuBtn + ' ' + (active)}
                    onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
                    onClick={props.toggleMenu}>
                <img className={css.arrowImg} src={arrow}/>
            </button>
            {props.state.isMenuOpened &&
                <PostMenuContainer deletePost={props.deletePost}
                                   toggleMenu={props.toggleMenu}
                />
            }
        </div>
    )
}

export default PostMenuBtn;