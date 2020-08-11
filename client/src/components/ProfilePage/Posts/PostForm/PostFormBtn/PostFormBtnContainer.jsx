import React from "react";
import PostFormBtn from "./PostFormBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";

const PostFormBtnContainer = props => {
    return <PostFormBtn {...props} />
}

export default compose(HoverBtn)(PostFormBtnContainer);