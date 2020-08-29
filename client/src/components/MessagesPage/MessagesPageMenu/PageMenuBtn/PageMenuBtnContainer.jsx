import React from "react";
import PageMenuBtn from "./PageMenuBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import {connect} from "react-redux";
import {changeCurrentBlock} from "../../../../redux/dialogs_reducer";

class PageMenuBtnContainer extends React.Component {

    render() {
        const isActive = this.props.currentBlock === this.props.blockName;
        return <PageMenuBtn {...this.props} isActive={isActive} />
    }
}


export default compose(
    connect(null, {changeCurrentBlock}),
    HoverBtn
)(PageMenuBtnContainer);