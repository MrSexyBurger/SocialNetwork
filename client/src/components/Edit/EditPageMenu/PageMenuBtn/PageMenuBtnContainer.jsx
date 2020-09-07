import React from "react";
import PageMenuBtn from "./PageMenuBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import {connect} from "react-redux";
import {changeEditSection} from "../../../../redux/edit_reducer";

class PageMenuBtnContainer extends React.Component {

    render() {
        const isActive = this.props.currentSection === this.props.sectionName;
        return <PageMenuBtn {...this.props} isActive={isActive} />
    }
}


export default compose(
    connect(null, {changeEditSection}),
    HoverBtn
)(PageMenuBtnContainer);