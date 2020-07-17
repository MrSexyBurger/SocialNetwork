import React from "react";
import Avatar from "./Avatar";

class AvatarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editHover: false,
            menuHover: false,
            messageHover: false,
            giftHover: false,
            menuIsOpened: false
        }
    }

    toggleHover = (target) => () => {
        this.setState({
            editHover: false,
            menuHover: false,
            giftHover: false,
            messageHover: false
        })

        if (target == 'edit'){
            this.setState({editHover: true});
        } else if (target == 'menu') {
            this.setState({menuHover: true});
        } else if (target == 'message') {
            this.setState({messageHover: true});
        } else if (target == 'gift') {
            this.setState({giftHover: true});
        }
    }

    toggleMenu = () => {
        this.setState({
            menuIsOpened: !this.state.menuIsOpened
        })
    }

    render() {
        return (
            <Avatar state={this.state}
                    guest={this.props.guest}
                    avatar={this.props.avatar}
                    toggleHover={this.toggleHover}
                    toggleMenu={this.toggleMenu}
            />
        )
    }
}

export default AvatarContainer;
