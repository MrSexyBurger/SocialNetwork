import React from "react";
import PostMenuBtn from "./PostMenuBtn";

class PostMenuBtnContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            isMenuOpened: false
        }
    }

    toggleHover = () => {
        this.setState({
            isHover: !this.state.isHover
        })
    }

    toggleMenu = () => {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        })
    }

    render() {
        return (
            <PostMenuBtn state={this.state}
                         toggleHover={this.toggleHover}
                         toggleMenu={this.toggleMenu}
                         {...this.props}
            />
        )
    }
}

export default PostMenuBtnContainer;