import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import ProfilePage from "./ProfilePage";
import {getUserProfile, updateGuest} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfilePageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pathname: this.props.location.pathname
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }

    componentWillReceiveProps (props) {
        /*if (this.state.postId !== props._id) {
            this.setState({postId: props._id});
        }*/
        let userId = props.match.params.userId;
        let authId = props.authId;
        let guest = authId !== userId;
        this.props.updateGuest(guest);
        if (this.state.pathname !== props.location.pathname){
            this.setState({pathname: props.location.pathname})
            this.props.getUserProfile(userId);
        }
    }

    render() {
        return (
            <ProfilePage/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, updateGuest}),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer)