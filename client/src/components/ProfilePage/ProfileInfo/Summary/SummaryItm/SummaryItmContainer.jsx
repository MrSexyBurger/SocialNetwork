import React from "react";
import {connect} from "react-redux";
import SummaryItm from "./SummaryItm";
import {compose} from "redux";
import {HoverBtn} from "../../../../../hoc/HoverBtn";

class SummaryItmContainer extends React.Component{

    render() {
        let itmCount;

        switch(this.props.itmName){
            case 'friends': {
                itmCount = this.props.friendsCount;
                break;
            }
            default:
                break;
        }



        return <SummaryItm itmName={this.props.itmName}
                           itmCount={itmCount}
                           isHover={this.props.isHover}
                           toggleHover={this.props.toggleHover}/>
    }
}

const mapStateToProps = state => {
    return {
        friendsCount: state.profile.info.friendsCount
    }
}

export default compose(
    connect(mapStateToProps, null),
    HoverBtn
)(SummaryItmContainer)