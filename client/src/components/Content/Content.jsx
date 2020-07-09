import {Route} from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/FeedPage";
import React from "react";

const Content = () => {
    return (
        <div className="App_Content_wrap">
            <Route path='/profile/:userId?' render={() => <ProfilePage/>}/>
            <Route path={'/feed'} render={() => <FeedPage/>}/>
        </div>
    )
}

export default Content;
