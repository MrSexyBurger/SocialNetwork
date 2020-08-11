import React from "react";
import {compose} from "redux";
import {HoverBtn} from "../../../../hoc/HoverBtn";
import {connect} from "react-redux";
import {toggleFullInfo} from "../../../../redux/profile_reducer";
import ShowMoreBtn from "./ShowMoreBtn";

class ShowMoreBtnContainer extends React.Component {

    render() {
        return <ShowMoreBtn {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        fullInfo: state.profile.fullInfo
    }
}

export default compose(
    connect(mapStateToProps, {toggleFullInfo}),
    HoverBtn
)(ShowMoreBtnContainer);