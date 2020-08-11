import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";

const PostsContainer = props => {
    return <Posts posts={props.posts}/>
}

const mapStateToProps = state => {
    return {
        posts: state.profile.posts
    }
}

export default connect(mapStateToProps)(PostsContainer);