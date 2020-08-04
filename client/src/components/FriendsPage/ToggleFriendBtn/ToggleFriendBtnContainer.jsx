import React from "react";
import ToggleFriendBtn from "./ToggleFriendBtn";
import {connect} from "react-redux";
import {followUser, unfollowUser} from "../../../redux/users_reducer";

class ToggleFriendBtnContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            isHover: false,
            isFriend: this.props.friends.includes(this.props.auth)
        }
    }

    componentWillReceiveProps(props) {
        if (props.friends.includes(this.props.auth)){
            this.setState({isFriend: true})
        } else {
            this.setState({isFriend: false})
        }

    }

    toggleHover = () => {
        this.setState({isHover: !this.state.isHover})
    }

    followUser = () => {
        this.props.followUser(this.state.userId, this.props.auth);
    }

    unfollowUser = () => {
        this.props.unfollowUser(this.state.userId, this.props.auth);
    }




    render() {
        //console.log(this.props.friends)
        return (
            <ToggleFriendBtn state={this.state}
                             toggleHover={this.toggleHover}
                             followUser={this.followUser}
                             unfollowUser={this.unfollowUser}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.userId
    }
}

export default connect(mapStateToProps, {followUser, unfollowUser})(ToggleFriendBtnContainer);