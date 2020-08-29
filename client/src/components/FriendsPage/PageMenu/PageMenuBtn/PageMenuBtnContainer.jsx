import React from "react";
import PageMenuBtn from "./PageMenuBtn";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";

class PageMenuBtnContainer extends React.Component {

    changeSection = () => {
        this.props.getUsers(this.props.sectionName);
    }

    render() {
        const isActive = this.props.currentSection == this.props.sectionName;
        return <PageMenuBtn    {...this.props}

                               changeSection={this.changeSection}

                               isActive={isActive} />
    }
}


export default compose(HoverBtn)(PageMenuBtnContainer);