import React from "react";
import Posts from "./Posts";

class PostsContainer extends React.Component {
    render() {
        return <Posts {...this.props} />
    }
}

export default PostsContainer