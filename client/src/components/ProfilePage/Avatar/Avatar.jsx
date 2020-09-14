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
            <img src={props.avatar + '?' + Math.random()} className={css.avatarImg}/>

            {props.guest
                ? <SendMessageBtnContainer/>
                : <EditLinkContainer/>
            }

        </div>
    )
}

export default Avatar;