import React from "react";
import AvatarPreview from "./AvatarPreview";
import {connect} from "react-redux";

class AvatarPreviewContainer extends React.Component {
    render() {
        if (this.props.newAvatarUrl) return <AvatarPreview avatar={this.props.newAvatarUrl}/>;
        if (this.props.info) return <AvatarPreview avatar={this.props.info.avatar.big}/>;
        return null
    }
}

const mapStateToProps = state => {
    return {
        info: state.edit.info,
        newAvatarUrl: state.edit.newAvatarUrl
    }
}

export default connect(mapStateToProps)(AvatarPreviewContainer);