import React from "react";
import MessagesItm from "./MessagesItm";
import {connect} from "react-redux";

class MessagesItmContainer extends React.Component {

    render() {
        let me = this.props.author === this.props.auth.userId

        if (me) {
            return <MessagesItm {...this.props}
                                avatar={this.props.auth.avatar}
                                username={this.props.auth.login}
            />
        } else {
            return <MessagesItm {...this.props}
                                avatar={this.props.dialogs.userInfo.avatar}
                                username={this.props.dialogs.userInfo.username}
            />
        }

    }
}

const mapStateToProps = state => {
    return {
        dialogs: state.dialogs,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(MessagesItmContainer);