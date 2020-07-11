import {Route} from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import FeedPage from "../FeedPage/FeedPage";
import React from "react";
import css from './Content.module.css';
import NavbarContainer from "../Navbar/NavbarContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";

const Content = () => {
    return (
        <div className={css.AppContentWrap}>
            <div className={css.AppContent}>
                <NavbarContainer />
                <div className={css.PageContent}>
                    <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                    <Route path={'/feed'} render={() => <FeedPage/>}/>
                </div>
            </div>
        </div>
    )
}

export default Content;
