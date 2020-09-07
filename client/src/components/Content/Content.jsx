import {Route} from "react-router-dom";
import React from "react";
import css from './Content.module.css';
import NavbarContainer from "../Navbar/NavbarContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import FriendsPageContainer from "../FriendsPage/FriendsPageContainer";
import MessagesPageContainer from "../MessagesPage/MessagesPageContainer";
import EditPageContainer from "../Edit/EditPageContainer";

const Content = () => {
    return (
        <div className={css.AppContentWrap}>
            <div className={css.AppContent}>
                <NavbarContainer />
                <div className={css.PageContent}>
                    <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                    <Route path={'/friends'} render={() => <FriendsPageContainer/>}/>
                    <Route path={'/messages'} render={() => <MessagesPageContainer/>}/>
                    <Route path={'/edit'} render={() => <EditPageContainer/>}/>
                </div>
            </div>
        </div>
    )
}

export default Content;
