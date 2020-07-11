import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileHover: false,
            feedHover: false,
            messagesHover: false,
            friendsHover: false,
            groupsHover: false,
            photosHover: false,
            musicHover: false,
            videosHover: false,
            gamesHover: false
        }
    }

    toggleHover = (link) => () => {
        this.setState({
            profileHover: false,
            feedHover: false,
            messagesHover: false,
            friendsHover: false,
            groupsHover: false,
            photosHover: false,
            musicHover: false,
            videosHover: false,
            gamesHover: false
        })

        if (link == 'profile') {
            this.setState({profileHover: true})
        } else  if (link == 'feed') {
            this.setState({feedHover: true})
        } else if (link == 'messages') {
            this.setState({messagesHover: true})
        } else if (link == 'friends') {
            this.setState({friendsHover: true})
        } else if (link == 'groups') {
            this.setState({groupsHover: true})
        } else if (link == 'photos') {
            this.setState({photosHover: true})
        } else if (link == 'music') {
            this.setState({musicHover: true})
        } else if (link == 'videos') {
            this.setState({videosHover: true})
        } else if (link == 'games') {
            this.setState({gamesHover: true})
        }

    }

    render() {
        return (
            <Navbar toggleHover={this.toggleHover} state={this.state} userId={this.props.userId}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(NavbarContainer);