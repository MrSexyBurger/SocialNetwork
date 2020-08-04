import React from "react";
import css from './FriendsPage.module.css';
import PageMenuContainer from "./PageMenu/PageMenuContainer";
import UsersContainer from "./Users/UsersContainer";


const FriendsPage = (props) => {
    return (
        <div className={css.friendsPageWrap}>
            <div className={css.friendsPageL}>
                <div className={css.friendliest}>
                    <div className={css.header}>
                        Поиск друзей
                        <button className={css.extSearch}>Расширенный поиск</button>
                    </div>
                        <UsersContainer/>
                </div>
            </div>
            <div className={css.friendsPageR}>
                <PageMenuContainer/>
            </div>
        </div>
    )
}

export default FriendsPage;