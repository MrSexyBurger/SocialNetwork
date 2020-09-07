import React from "react";
import InfoForm from "./InfoForm";
import {getEditInfo, saveInfo} from "../../../../redux/edit_reducer";
import {connect} from "react-redux";

class InfoFormContainer extends React.Component {

    componentDidMount() {
        this.props.getEditInfo();
    }

    onSubmit = (formData) => {
        this.props.saveInfo(formData);
    }


    render() {
        if (this.props.info) return <InfoForm onSubmit={this.onSubmit} info={this.props.info} />
        return null
    }
}

const mapStateToProps = state => {
    return {
        info: state.edit.info
    }
}

export default connect(mapStateToProps, {saveInfo, getEditInfo})(InfoFormContainer);