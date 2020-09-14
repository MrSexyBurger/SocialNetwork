import React from "react";
import InfoForm from "./InfoForm";
import {getEditInfo, saveInfo, updateSaving} from "../../../../redux/edit_reducer";
import {connect} from "react-redux";

class InfoFormContainer extends React.Component {

    componentDidMount() {
        this.props.getEditInfo();
    }

    onSubmit = (formData) => {
        this.props.saveInfo(formData);
    }


    render() {
        if (this.props.info) return <InfoForm onSubmit={this.onSubmit} info={this.props.info} saving={this.props.saving} />
        return null
    }
}

const mapStateToProps = state => {
    return {
        info: state.edit.info,
        saving: state.edit.saving
    }
}

export default connect(mapStateToProps, {saveInfo, getEditInfo})(InfoFormContainer);