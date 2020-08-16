import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

class ProfileInfoContainer extends React.Component {

    render() {
        let profile = this.props.profile;
        return profile && profile.info && <ProfileInfo info={profile.info} online={profile.online}/>
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, null)(ProfileInfoContainer);