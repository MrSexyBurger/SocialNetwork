import React from "react";
import NewDialog from "./NewDialog";
import {connect} from "react-redux";
import {getNewDialogs} from "../../../redux/dialogs_reducer";

class NewDialogContainer extends React.Component {

    componentDidMount() {
        this.props.getNewDialogs();
    }

    render() {
        let currentBlock = this.props.dialogs.currentBlock;
        return <NewDialog newDialogs={this.props.dialogs.newDialogs} />
    }
}

const mapStateToProps = state => {
    return {
        dialogs: state.dialogs
    }
}

export default connect(mapStateToProps, {getNewDialogs})(NewDialogContainer);