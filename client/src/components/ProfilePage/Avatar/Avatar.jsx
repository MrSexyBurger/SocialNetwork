import React from "react";
import css from "./Avatar.module.css";
import SendMessageBtnContainer from "./ActionBtns/SendMessageBtnContainer";
import SendGiftBtnContainer from "./ActionBtns/SendGiftBtnContainer";
import EditLinkContainer from "./ActionBtns/EditLinkContainer";
import OpenMenuBtnContainer from "./ActionBtns/OpenMenuBtnContainer";
import Menu from "./Menu/Menu";

const Avatar = (props) => {
    return (
        <div className={css.avatarWrap}>
            <img src={props.avatar} className={css.avatarImg}/>

            {props.guest
                ? <div className={css.sendBtnsWrap}>
                    <SendMessageBtnContainer/>
                    <SendGiftBtnContainer/>
                </div>
                : null
            }

            {!props.menu
                ? <div className={css.actionsWrap}>
                    <EditLinkContainer/>
                    <OpenMenuBtnContainer menu={props.menu} toggleMenu={props.toggleMenu}/>
                </div>
                : null
            }

            {props.menu
                ? <Menu guest={!props.guest} toggleMenu={props.toggleMenu}/>
                : null
            }

        </div>
    )

}

export default Avatar;