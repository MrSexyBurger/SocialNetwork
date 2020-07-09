import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import React from "react";
import css from './HeaderMenu.module.css';

const HeaderMenu = (props) => {

    let editClass = props.state.edit ? `${css.menuEditNav} ${css.hover}` : css.menuEditNav;
    let settingsClass = props.state.settings ? `${css.menuNav} ${css.hover}` : css.menuNav;
    let helpClass = props.state.help ? `${css.menuNav} ${css.hover}` : css.menuNav;
    let logoutClass = props.state.logout ? `${css.logout} ${css.hover}` : css.logout;


    return (
        <div className={css.menu}>
            <div className={css.menuNavWrap} onMouseEnter={props.toggleNav('edit')} onMouseLeave={props.toggleNav()} onClick={props.toggleMenu}>
                <NavLink className={editClass} to={'/edit'}>
                    <img src={props.avatar} className={css.avatar}/>
                    <div className={css.menuEditNavInfo} >
                        <div className={css.menuEditNavLogin}>{props.login}</div>
                        <div className={css.menuEditNavText} >Перейти в редактор</div>
                    </div>
                </NavLink>
            </div>
            <div className={css.menuLine}></div>
            <div className={css.menuNavWrap} onMouseEnter={props.toggleNav('settings')} onMouseLeave={props.toggleNav()} onClick={props.toggleMenu}>
                <NavLink className={settingsClass} to={'/settings'}>Настройки</NavLink>
            </div>

            <div className={css.menuNavWrap} onMouseEnter={props.toggleNav('help')} onMouseLeave={props.toggleNav()} onClick={props.toggleMenu}>
                <NavLink className={helpClass} to={'/help'}>Помощь</NavLink>
            </div>
            <div  className={css.menuLine}></div>
            <button onMouseEnter={props.toggleNav('logout')} onMouseLeave={props.toggleNav()} className={logoutClass} onClick={props.closeMenuAndLogout}>Выйти</button>
        </div>
    )
}

export default HeaderMenu;