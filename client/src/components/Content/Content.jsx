import {Route} from "react-router-dom";
import React from "react";
import css from './Content.module.css';
import NavbarContainer from "../Navbar/NavbarContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import FriendsPageContainer from "../FriendsPage/FriendsPageContainer";

const Content = () => {
    return (
        <div className={css.AppContentWrap}>
            <div className={css.AppContent}>
                <NavbarContainer />
                <div className={css.PageContent}>
                    <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                    <Route path={'/friends'} render={() => <FriendsPageContainer/>}/>
                </div>
            </div>
        </div>
    )
}

export default Content;
