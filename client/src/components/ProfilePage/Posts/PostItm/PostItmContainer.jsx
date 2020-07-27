import React from "react";
import PostItm from "./PostItm";
import {connect} from "react-redux";
import {deletePost} from "../../../../redux/profile_reducer";

class PostItmContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: this.props._id,
        }
    }

    toggleHover = () => {
        this.setState({
            isHover: !this.state.isHover
        })
    }

    toggleMenu = () => {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        })
    }

    deletePost = () => {
        this.props.deletePost(this.state.postId);
    }

    componentWillReceiveProps (props) {
        if (this.state.postId !== props._id) {
            this.setState({postId: props._id});
        }
    }

    render() {
        return <PostItm {...this.props}
                        state={this.state}
                        deletePost={this.deletePost}
                        toggleHover={this.toggleHover}
                        toggleMenu={this.toggleMenu}
        />
    }
}

export default connect(null, {deletePost})(PostItmContainer);