import React from "react";
import {connect} from "react-redux";
import {getPosts, getStatus, getUserProfile} from "../../redux/profile_reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import ProfilePage from "./ProfilePage";


class ProfilePageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guest: false
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        this.props.getPosts(userId);
    }

    componentWillReceiveProps (props) {
        if (this.state.postId !== props._id) {
            this.setState({postId: props._id});
        }
    }

    render() {

        if ( this.props.profile
            && (this.props.authId !== this.props.profile.userId)
            && (this.state.guest === false) ) {
            this.setState({guest: true});
        } else if ( this.props.profile
            && (this.props.authId == this.props.profile.userId)
            && (this.state.guest === true) ) {
            this.setState({guest: false});
        }

        return <ProfilePage guest={this.state.guest}
                            profile={this.props.profile}
                            status={this.props.status}
                            posts={this.props.posts}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        posts: state.profile.posts,
        authId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, getPosts}),
    withRouter
)(ProfilePageContainer);