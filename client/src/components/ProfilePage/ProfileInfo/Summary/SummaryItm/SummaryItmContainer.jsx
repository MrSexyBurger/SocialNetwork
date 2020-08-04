import React from "react";
import {connect} from "react-redux";
import SummaryItm from "./SummaryItm";

class SummaryItmContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    }

    toggleHover = () => {
        this.setState({
            isHover: !this.state.isHover
        })
    }

    render() {
        return <SummaryItm toggleHover={this.toggleHover}
                           isHover={this.state.isHover}
                           itmName={this.props.itmName}
                           count={this.props.friends.length}
        />
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, null)(SummaryItmContainer);