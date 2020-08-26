import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {getDialogs} from "../../../redux/dialogs_reducer";

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
    }

    render() {
        let dialogs = this.props.dialogs.dialogs;

        return <Dialogs dialogs={dialogs}/>
    }
}

export default connect(null, {getDialogs})(DialogsContainer);