import React from "react";
import MessagesPage from "./MessagesPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class MessagesPageContainer extends React.Component {
    render() {
        return <MessagesPage dialogs={this.props.dialogs}/>
    }
}

const mapStateToProps = state => {
    return {
        dialogs: state.dialogs
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(MessagesPageContainer);