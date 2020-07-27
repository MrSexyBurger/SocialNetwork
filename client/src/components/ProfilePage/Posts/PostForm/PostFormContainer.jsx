import React from "react";
import {connect} from "react-redux";
import {postPost} from "../../../../redux/profile_reducer";
import ReduxPostForm from "./PostForm";

class PostFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    }

    toggleHover = () => {
        this.setState({isHover: !this.state.isHover})
    }

    onSubmit = (formData) => {
        this.props.postPost(formData.post);
    }

    render() {
        return (
            <ReduxPostForm   isHover={this.state.isHover}
                             toggleHover={this.toggleHover}
                             status={this.props.status}
                             onSubmit={this.onSubmit}/>
        )
    }
}

export default connect(null, {postPost})(PostFormContainer);