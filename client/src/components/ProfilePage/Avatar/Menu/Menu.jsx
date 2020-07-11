import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Menu.module.css";

const Menu = (props) => {

    let actionList;

    if (props.guest) {
        actionList = <div className={css.navWrap}>
            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('sendMoney')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.sendMoney ? css.hover : ' ')} >Отправить деньги</NavLink>
            </div>

            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('notify')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.notify ? css.hover : ' ')} >Уведомлять о записях</NavLink>
            </div>

            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('streams')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.streams ? css.hover : ' ')} >Не сообщать о трансляциях</NavLink>
            </div>

            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('bookmarks')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.bookmarks ? css.hover : ' ')} >Сохранить в закладках</NavLink>
            </div>

            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('news')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.news ? css.hover : ' ')} >Скрывать новости</NavLink>
            </div>

            <div className={css.line}/>

            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('report')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.report ? css.hover : ' ')} >Пожаловаться на страницу</NavLink>
            </div>

        </div>
    } else {
        actionList = <div className={css.navWrap}>
            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('memories')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.memories ? css.hover : ' ')} >Воспоминания</NavLink>
            </div>

            <div className={css.navLinkWrap}
                 onMouseEnter={props.toggleHover('transfers')}
                 onMouseLeave={props.toggleHover()}
            >
                <NavLink to={'/asd'} className={css.nav + ' ' + (props.state.transfers ? css.hover : ' ')} >Денежные переводы</NavLink>
            </div>

        </div>
    }

    return (
        <div className={css.menu} onMouseLeave={props.toggleMenu}>
            <div className={css.header}>
                <span>Действия</span>
                <div className={css.dots}>
                    <span className={css.dot}/>
                    <span className={css.dot}/>
                    <span className={css.dot}/>
                </div>
            </div>
            {actionList}
        </div>
    )
}

export default Menu;