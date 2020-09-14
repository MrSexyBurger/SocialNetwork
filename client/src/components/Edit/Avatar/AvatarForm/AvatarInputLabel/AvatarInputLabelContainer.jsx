import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";
import AvatarInputLabel from "./AvatarInputLabel";

class AvatarInputLabelContainer extends React.Component {
    render() {
        return <AvatarInputLabel {...this.props}/>
    }
}

export default compose(HoverBtn)(AvatarInputLabelContainer);