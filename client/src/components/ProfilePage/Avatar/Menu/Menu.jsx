import React from "react";
import css from "./Menu.module.css";
import ActionBtnContainer from "./ActionBtn/ActionBtnContainer";

const Menu = (props) => {

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

            {props.guest
                ? <div className={css.actionWrap}>
                    <ActionBtnContainer actionName={'Отправить деньги'}/>
                    <ActionBtnContainer actionName={'Уведомлять о записях'}/>
                    <ActionBtnContainer actionName={'Не сообщать о трансляциях'}/>
                    <ActionBtnContainer actionName={'Сохранить в закладках'}/>
                    <ActionBtnContainer actionName={'Скрывать новости'}/>
                    <div className={css.line}/>
                    <ActionBtnContainer actionName={'Пожаловаться на страницу'}/>
                </div>

                : <div className={css.actionWrap}>
                    <ActionBtnContainer actionName={'Воспоминания'}/>
                    <ActionBtnContainer actionName={'Денежные переводы'}/>
                </div>
            }


        </div>
    )
}

export default Menu;