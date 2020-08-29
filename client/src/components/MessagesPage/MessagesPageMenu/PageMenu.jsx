import React from "react";
import css from './PageMenu.module.css';
import PageMenuBtnContainer from "./PageMenuBtn/PageMenuBtnContainer";

const PageMenu = props => {
    let lineClass;

    switch (props.currentBlock){
        case 'dialogs': {
            lineClass = css.linePos1;
            break;
        }
        case 'createDialog': {
            lineClass = css.linePos2;
            break;
        }
        case 'messages': {
            lineClass = css.linePos3;
            break;
        }
        default:
            break;
    }

    return (
        <div className={css.pageMenu}>
            <div className={css.line + ' ' + lineClass}></div>
            <PageMenuBtnContainer btnName={'Диалоги'}
                                  blockName={'dialogs'}
                                  currentBlock={props.currentBlock}
            />
            <PageMenuBtnContainer btnName={'Создать диалог'}
                                  blockName={'createDialog'}
                                  currentBlock={props.currentBlock}
            />
            <div className={css.userBtnLine}></div>
            {props.userInfo &&
                <PageMenuBtnContainer btnName={props.userInfo.username}
                                      blockName={'messages'}
                                      currentBlock={props.currentBlock}
                />
            }
        </div>
    )
}

export default PageMenu;