import React from "react";
import Summary from "./Summary";

class SummaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsHover: false,
            followersHover: false,
            photosHover: false,
            videosHover: false,
            presentsHover: false
        }
    }

    toggleHover = (target) => () => {
        this.setState({
            friendsHover: false,
            followersHover: false,
            photosHover: false,
            videosHover: false,
            presentsHover: false
        });

        switch (target) {
            case 'friends':
                this.setState({
                    friendsHover: true
                });
                break;
            case 'followers':
                this.setState({
                    followersHover: true
                });
                break;
            case 'photos':
                this.setState({
                    photosHover: true
                });
                break;
            case 'videos':
                this.setState({
                    videosHover: true
                });
                break;
            case 'presents':
                this.setState({
                    presentsHover: true
                });
                break;
        }

    }

    render() {
        return (
            <Summary state={this.state} toggleHover={this.toggleHover} />
        )
    }
}

export default SummaryContainer;