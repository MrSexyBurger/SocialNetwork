import React from "react";
import UsernameLink from "./UsernameLink";
import {HoverBtn} from "../../../../../hoc/HoverBtn";
import {compose} from "redux";

class UsernameLinkContainer extends React.Component {
    render() {
        return <UsernameLink {...this.props}/>
    }
}

export default compose(HoverBtn)(UsernameLinkContainer)