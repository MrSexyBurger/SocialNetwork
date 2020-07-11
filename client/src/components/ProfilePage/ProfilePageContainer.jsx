import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile_reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import ProfilePage from "./ProfilePage";


class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {
        return <ProfilePage profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfilePageContainer);