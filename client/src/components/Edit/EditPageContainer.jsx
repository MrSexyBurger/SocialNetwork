import React from "react";
import EditPage from "./EditPage";
import {connect} from "react-redux";

class EditPageContainer extends React.Component {
    render() {
        return <EditPage {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        edit: state.edit
    }
}

export default connect(mapStateToProps)(EditPageContainer);