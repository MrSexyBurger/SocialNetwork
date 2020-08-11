import React from "react";
import {connect} from "react-redux";
import {postPost} from "../../../../redux/profile_reducer";
import ReduxPostForm from "./PostForm";

class PostFormContainer extends React.Component {

    onSubmit = (formData) => {
        const post = formData.post;
        const userId = this.props.profile.info.userId;
        this.props.postPost(post, userId);
    }

    render() {
        return <ReduxPostForm onSubmit={this.onSubmit}/>
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, {postPost})(PostFormContainer);