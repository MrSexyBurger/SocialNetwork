import React from "react";
import PostFormContainer from "./PostForm/PostFormContainer";
import css from './Posts.module.css';
import PostItmContainer from "./PostItm/PostItmContainer";

const Posts = (props) => {
    let posts = props.posts;
    if( posts ) {
        posts = posts.map(post => {
            return (
                <PostItmContainer   _id={post._id}
                                    sender={post.sender}
                                    text={post.text}
                                    avatar={post.avatar}
                                    userName={post.username}
                                    date={post.date}
                />
            )
        });

        posts = posts.reverse();
    }

    return (
        <div className={css.postsWrap}>
            {posts}
        </div>
    )
}

export default Posts;