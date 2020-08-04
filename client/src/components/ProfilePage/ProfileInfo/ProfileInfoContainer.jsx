import React from "react";
import ProfileInfo from "./ProfileInfo";

class ProfileInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            isOpened: false
        }
    }

    toggleHover = () => {
        this.setState({isHover: !this.state.isHover});
    }

    toggleMenu = () => {
        this.setState({isOpened: !this.state.isOpened});
    }


    render() {
        return (
            <ProfileInfo {...this.props}
                         state={this.state}
                         toggleHover={this.toggleHover}
                         toggleMenu={this.toggleMenu}
            />
        )
    }
}

export default ProfileInfoContainer;