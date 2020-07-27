import React from "react";
import css from './PostItm.module.css';
import PostMenuBtnContainer from "./PostMenu/PostMenuBtnContainer";

const PostItm = (props) => {
    let postDate = props.date
    postDate = postDate.split( ' ');
    postDate = `${postDate[0]} в ${postDate[1]}`;

    return (
            <div className={css.PostItmWrap}>
                <div className={css.postHeader}>
                    <img className={css.avatarImg} src={props.avatar} />
                    <div className={css.postHeaderInfo}>
                        <div className={css.postInfo}>
                            <span className={css.postAuthor}>{props.userName}</span>
                            <span className={css.postDate}>{postDate}</span>
                        </div>
                    </div>
                    <PostMenuBtnContainer deletePost={props.deletePost}/>
                </div>
                <div className={css.postText}>{props.text}</div>
            </div>
        )
}

export default PostItm;