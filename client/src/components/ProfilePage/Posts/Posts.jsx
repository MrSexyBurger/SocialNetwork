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
                                    text={post.text}
                                    avatar={props.avatar}
                                    userName={props.userName}
                                    date={post.date}
                />
            )
        });

        posts = posts.reverse();
    }

    return (
        <div className={css.postsWrap}>
            <PostFormContainer/>
            {posts}
        </div>
    )
}

export default Posts;