import React from "react";
import css from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';
import arrow from '../../assets/images/arrow.svg';
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Login from "./HeaderForm/Login";


const Header = (props) => {

    let hoverClass;

    if (props.state.menuActive ){
        hoverClass = `${css.userBtn} ${css.active}`;
    } else if (props.state.btnHover) {
        hoverClass = `${css.userBtn} ${css.hover}`;
    } else if (!props.state.btnHover){
        hoverClass = css.userBtn;
    }

    return (
        <header className={css.header}>
            <div className={css.header__wrap}>

                <div className={css.logo__wrap} onMouseEnter={props.toggleEdit}>
                    <img src={logo} className={css.logo__img}/>
                    <div className={css.logo__text}>Social Network</div>
                </div>

                {props.isAuth
                    ? <button className={hoverClass}
                              onMouseEnter={props.hover}
                              onMouseLeave={props.leave}
                              onClick={props.toggleMenu}>
                        <div className={css.userBtnName}>{props.login.split(' ')[0]}</div>
                        <img src={props.avatar} className={css.userBtnAvatar}/>
                        <img src={arrow} className={css.arrowImg}/>
                    </button>
                    : <Login />
                }

                { props.state.menuActive
                    ? <HeaderMenu avatar={props.avatar} login={props.login} toggleNav={props.toggleNav} state={props.state} toggleMenu={props.toggleMenu} closeMenuAndLogout={props.closeMenuAndLogout}/>
                    :  null}

            </div>

        </header>
    )
}

export default Header;