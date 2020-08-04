import React from "react";
import css from './PageMenu.module.css';
import PageMenuBtnContainer from "./PageMenuBtn/PageMenuBtnContainer";

const PageMenu = props => {
    return (
        <div className={css.pageMenu}>
            <div className={css.line + ' ' + ( props.currentSection == 'friends' ?  css.linePos1 : css.linePos2)}></div>
            <PageMenuBtnContainer btnName={'Мои друзья'}
                                  sectionName={'friends'}
                                  currentSection={props.currentSection}
                                  getUsers={props.getUsers}
            />
            <PageMenuBtnContainer btnName={'Поиск друзей'}
                                  sectionName={'find'}
                                  currentSection={props.currentSection}
                                  getUsers={props.getUsers}
            />
        </div>
    )
}

export default PageMenu;