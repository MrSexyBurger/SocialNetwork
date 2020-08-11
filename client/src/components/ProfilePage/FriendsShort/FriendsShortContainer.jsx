import React from "react";
import FriendsShort from "./FriendsShort";
import {connect} from "react-redux";

class FriendsShortContainer extends React.Component {
    render() {
        const friends = this.props.profile.friendsShort;
        const count = this.props.profile.info && this.props.profile.info.friendsCount;

        return <FriendsShort friends={friends} count={count}/>
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}


export default connect(mapStateToProps)(FriendsShortContainer)