import React from "react";
import css from './PageMenu.module.css';
import PageMenuBtnContainer from "./PageMenuBtn/PageMenuBtnContainer";

const PageMenu = props => {
    let lineClass;

    switch (props.currentSection){
        case 'info': {
            lineClass = css.linePos1;
            break;
        }
        case 'avatar': {
            lineClass = css.linePos2;
            break;
        }
        default:
            break;
    }

    return (
        <div className={css.pageMenu}>
            <div className={css.line + ' ' + lineClass}></div>
            <PageMenuBtnContainer btnName={'Информация'}
                                  sectionName={'info'}
                                  currentSection={props.currentSection}
            />
            <PageMenuBtnContainer btnName={'Аватар'}
                                  sectionName={'avatar'}
                                  currentSection={props.currentSection}
            />
        </div>
    )
}

export default PageMenu;