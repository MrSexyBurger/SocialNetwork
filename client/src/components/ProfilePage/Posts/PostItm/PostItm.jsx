import React from "react";
import css from './PostItm.module.css';
import PostMenuBtnContainer from "./PostMenu/PostMenuBtnContainer";
import {NavLink} from "react-router-dom";

const PostItm = (props) => {
    const isAuthor = props.auth == props.sender;
    let postDate = props.date
    postDate = postDate.split( ' ');
    postDate = `${postDate[0]} в ${postDate[1]}`;
    return (
            <div className={css.PostItmWrap}>
                <div className={css.postHeader}>
                    <NavLink to={`/profile/${props.sender}`}><img className={css.avatarImg} src={props.avatar}/></NavLink>
                    <div className={css.postHeaderInfo}>
                        <div className={css.postInfo}>
                            <NavLink to={`/profile/${props.sender}`}><span className={css.postAuthor}>{props.userName}</span></NavLink>
                            <span className={css.postDate}>{postDate}</span>
                        </div>
                    </div>
                    {isAuthor && <PostMenuBtnContainer deletePost={props.deletePost}/>}
                </div>
                <div className={css.postText}>{props.text}</div>
            </div>
        )
}

export default PostItm;