import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers} from "../../../redux/users_reducer";


class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentSection);
    }

    render() {
        return <Users users={this.props.users}
                      isLoading={this.props.isLoading}
                      currentSection={this.props.currentSection}
        />
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        currentSection: state.users.currentSection,
        isLoading: state.users.isLoading
    }
}

export default connect( mapStateToProps, {getUsers})(UsersContainer);