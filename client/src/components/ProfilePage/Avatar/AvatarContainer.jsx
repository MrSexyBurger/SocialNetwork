import React from "react";
import Avatar from "./Avatar";
import {connect} from "react-redux";

class AvatarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        let profile = this.props.profile;
        let avatar = profile ? profile.avatar.big : null;

        return (
            <Avatar guest={this.props.guest}
                    avatar={avatar}
                    menu={this.state.menu}
                    toggleMenu={this.toggleMenu}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile.info,
        guest: state.profile.guest
    }
}

export default connect(mapStateToProps, null)(AvatarContainer);
