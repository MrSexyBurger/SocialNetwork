import React from "react";
import {NavLink} from "react-router-dom";
import profileImg from "../../assets/images/propfile-icon.png";
import feedImg from "../../assets/images/feed-icon.png";
import messagesImg from "../../assets/images/messages-icon.png";
import friendsImg from "../../assets/images/friends-icon.png";
import groupsImg from "../../assets/images/groups.png";
import photosImg from "../../assets/images/photos-icon.png";
import musicImg from "../../assets/images/music-icon.png";
import videoImg from "../../assets/images/video-icon.png";
import gamesImg from "../../assets/images/games-icon.png";
import css from './Navbar.module.css'

const Navbar = (props) => {

    return (
        <nav className={css.Nav}>
            <NavLink className={css.NavLinkItm + ' ' + (props.state.profileHover ? css.hover : '')}
                     to={`/profile/${props.userId}`}
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('profile')}
                     onMouseLeave={props.toggleHover()}
            ><img src={profileImg}/>Моя страница</NavLink>

            {/*<NavLink className={css.NavLinkItm + ' ' + (props.state.feedHover ? css.hover : '')}
                     to='/feed'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('feed')}
                     onMouseLeave={props.toggleHover()}
            ><img src={feedImg}/>Новости</NavLink>*/}

            <NavLink className={css.NavLinkItm + ' ' + (props.state.messagesHover ? css.hover : '')}
                     to='/messages'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('messages')}
                     onMouseLeave={props.toggleHover()}
            ><img src={messagesImg}/>Сообщения</NavLink>

            <NavLink className={css.NavLinkItm + ' ' + (props.state.friendsHover ? css.hover : '')}
                     to='/friends'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('friends')}
                     onMouseLeave={props.toggleHover()}
            ><img src={friendsImg}/>Друзья</NavLink>

            {/*<NavLink className={css.NavLinkItm + ' ' + (props.state.groupsHover ? css.hover : '')}
                     to='/groups'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('groups')}
                     onMouseLeave={props.toggleHover()}
            ><img src={groupsImg}/>Сообщества</NavLink>*/}

            {/*<NavLink className={css.NavLinkItm + ' ' + (props.state.photosHover ? css.hover : '')}
                     to='/photos'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('photos')}
                     onMouseLeave={props.toggleHover()}
            ><img src={photosImg}/>Фотографии</NavLink>*/}

            {/*<NavLink className={css.NavLinkItm + ' ' + (props.state.musicHover ? css.hover : '')}
                     to='/music'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('music')}
                     onMouseLeave={props.toggleHover()}
            ><img src={musicImg}/>Музыка</NavLink>*/}

            {/*<NavLink className={css.NavLinkItm + ' ' + (props.state.videosHover ? css.hover : '')}
                     to='/videos'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('videos')}
                     onMouseLeave={props.toggleHover()}
            ><img src={videoImg}/>Видео</NavLink>*/}

            {/*<NavLink className={css.NavLinkItm + ' ' + (props.state.gamesHover ? css.hover : '')}
                     to='/games'
                     activeClassName={css.active}
                     onMouseEnter={props.toggleHover('games')}
                     onMouseLeave={props.toggleHover()}
            ><img src={gamesImg}/>Игры</NavLink>*/}

        </nav>
    )
}

export default Navbar;