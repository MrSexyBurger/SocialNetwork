import React from "react";
import FriendsPage from "./FriendsPage";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class FriendsPageContainer extends React.Component {

    render() {
        return <FriendsPage />
    }
}

export default compose(withAuthRedirect)(FriendsPageContainer);