import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import EditLink from "./EditLink";

class EditLinkContainer extends React.Component {
    render() {
        return (
            <EditLink {...this.props}/>
        )
    }
}

export default compose(
    HoverBtn
)(EditLinkContainer);