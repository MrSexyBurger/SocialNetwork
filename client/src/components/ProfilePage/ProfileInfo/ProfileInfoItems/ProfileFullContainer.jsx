import React from "react";
import ProfileFull from "./ProfileFull";
import {connect} from "react-redux";

class ProfileFullContainer extends React.Component {
    render() {
        //console.log(this.props.info)
        return this.props.fullInfo && <ProfileFull info={this.props.info}/>
    }
}

const mapStateToProps = state => {
    return {
        fullInfo: state.profile.fullInfo
    }
}

export default connect(mapStateToProps)(ProfileFullContainer);