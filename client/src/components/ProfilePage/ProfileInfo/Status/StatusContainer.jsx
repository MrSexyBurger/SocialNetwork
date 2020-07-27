import React from "react";
import Status from "./Status";
import {connect} from "react-redux";
import {getStatus, toggleStatusForm} from "../../../../redux/profile_reducer";

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

    openForm = () => {
        this.props.toggleStatusForm(true);
    }

    render() {
        return (
            <Status {...this.props}
                    state={this.state}
                    toggleHover={this.toggleHover}
                    openForm={this.openForm}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        statusForm: state.profile.statusForm
    }
}

export default connect(mapStateToProps, {getStatus, toggleStatusForm})(StatusContainer);