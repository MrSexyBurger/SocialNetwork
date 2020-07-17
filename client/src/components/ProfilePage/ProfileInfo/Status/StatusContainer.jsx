import React from "react";
import Status from "./Status";
import {connect} from "react-redux";
import {getStatus} from "../../../../redux/profile_reducer";

class StatusContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btnHover: false,
            isMenuOpen: false
        }
    }

    toggleHover = () => {
        this.setState({btnHover: !this.state.btnHover} );
    }

    render() {
        return (
            <Status {...this.props} state={this.state} toggleHover={this.toggleHover} />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }

}

export default connect(mapStateToProps, {getStatus})(StatusContainer);