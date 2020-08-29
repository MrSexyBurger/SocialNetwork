import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {getDialogs} from "../../../redux/dialogs_reducer";

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
    }

    render() {
        return <Dialogs dialogs={this.props.dialogs.dialogs}/>
    }
}

export default connect(null, {getDialogs})(DialogsContainer);