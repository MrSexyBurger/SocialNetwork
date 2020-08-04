import React from "react";
import {connect} from "react-redux";
import PageMenu from "./PageMenu";
import {getUsers} from "../../../redux/users_reducer";

class PageMenuContainer extends React.Component {
        render() {
            return <PageMenu {...this.props}/>
        }
}

const mapStateToProps = state => {
    return {
        currentSection: state.users.currentSection
    }
}

export default connect(mapStateToProps, {getUsers})(PageMenuContainer);