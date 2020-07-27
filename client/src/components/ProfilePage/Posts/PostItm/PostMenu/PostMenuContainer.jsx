import React from "react";
import PostMenu from "./PostMenu";

class PostMenuContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            btnHover: false,
            deleteHover: false
        }
    }

    toggleHover = (target) => () => {
        this.setState({
            deleteHover: false
        })

        switch (target) {
            case 'delete': {
                this.setState({
                    deleteHover: true
                })
            }
            default: {
                return
            }
        }
    }

    render() {
        return (
            <PostMenu {...this.props} state={this.state} toggleHover={this.toggleHover} />
        )
    }
}

export default PostMenuContainer;