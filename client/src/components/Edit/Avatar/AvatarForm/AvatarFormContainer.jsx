import React from "react";
import {connect} from "react-redux";
import AvatarForm from "./AvatarForm";
import {getEditInfo, updateNewAvatarUrl} from "../../../../redux/edit_reducer";

class AvatarFormContainer extends React.Component {

    componentDidMount() {
        this.props.getEditInfo();
    }

    componentWillUnmount() {
        this.props.updateNewAvatarUrl(null);
    }

    render() {
        if (this.props.info) return <AvatarForm info={this.props.info} />
        return null
    }
}

const mapStateToProps = state => {
    return {
        info: state.edit.info,
    }
}

export default connect(mapStateToProps, {getEditInfo, updateNewAvatarUrl})(AvatarFormContainer);