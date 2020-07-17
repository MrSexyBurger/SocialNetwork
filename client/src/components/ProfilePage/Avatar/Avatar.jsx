import React from "react";
import css from "./Avatar.module.css";
import {NavLink} from "react-router-dom";
import MenuContainer from "./Menu/MenuContainer";

const Avatar = (props) => {
    const menuHover = props.state.menuHover;
    const editHover = props.state.editHover;
    const messageHover = props.state.messageHover;
    const giftHover = props.state.giftHover;
    const menuIsOpened = props.state.menuIsOpened;
    const guest = props.guest;

    return (
        <div className={css.avatarWrap}>
            <img src={props.avatar ? props.avatar : ' '} className={css.avatarImg} />
            {guest
                ? <div className={css.sendBtnsWrap}>
                    <button className={css.sendMessageBtn + ' ' + (messageHover ? css.hover : ' ')}
                            onMouseEnter={props.toggleHover('message')}
                            onMouseLeave={props.toggleHover()}>
                            Написать сообщение
                    </button>
                    <button className={css.sendGiftBtn + ' ' + (giftHover ? css.hover : ' ')}
                            onMouseEnter={props.toggleHover('gift')}
                            onMouseLeave={props.toggleHover()}></button>
                </div>
                : null}


            <div className={css.actionsWrap}>
            {menuIsOpened
                ? <MenuContainer guest={guest} toggleMenu={props.toggleMenu} />
                : <div className={css.actions}>
                    <NavLink to={'/edit'}
                             className={css.editBtn  + ' ' + (editHover ? css.hover : ' ')}
                             onMouseEnter={props.toggleHover('edit')}
                             onMouseLeave={props.toggleHover()}>
                        Редактировать
                    </NavLink>
                    <button className={css.menuBtn + ' ' + (menuHover ? css.hover : ' ')}
                            onMouseEnter={props.toggleHover('menu')}
                            onMouseLeave={props.toggleHover()}
                            onClick={props.toggleMenu}
                    >
                        <span className={css.dot}/>
                        <span className={css.dot}/>
                        <span className={css.dot}/>
                    </button>
                </div>
            }
            </div>

        </div>
        )

}

export default Avatar;