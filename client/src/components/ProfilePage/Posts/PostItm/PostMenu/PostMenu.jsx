import React from "react";
import css from './PostMenu.module.css';

const PostMenu = (props) => {

    return (
        <div onMouseLeave={props.toggleMenu}>
            <div className={css.postMenuWrap} >
                <button className={css.postActionBtn + ' ' + (props.state.deleteHover ? css.hover : '') }
                        onClick={props.deletePost}
                        onMouseEnter={props.toggleHover('delete')}
                        onMouseLeave={props.toggleHover()}
                >Удалить запись</button>
            </div>
        </div>
    )
}

export default PostMenu;