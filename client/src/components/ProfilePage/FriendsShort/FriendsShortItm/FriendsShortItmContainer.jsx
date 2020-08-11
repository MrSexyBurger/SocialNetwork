import React from "react";
import FriendsShortItm from "./FriendsShortItm";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";

class FriendsShortItmContainer extends React.Component {
    render() {
        return <FriendsShortItm {...this.props}/>
    }
}

export default compose(HoverBtn)(FriendsShortItm);