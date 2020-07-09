import React from "react";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth_reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    constructor(props) {
        super(props);
        this.state = {
            btnHover: false,
            menuActive: false,
            edit: false,
            settings: false,
            help: false,
            logout: false

        }
    }

    onMouseEnterHandler = () => {
        this.setState({btnHover: true})
    }

    onMouseLeaveHandler = () => {
        this.setState({btnHover: false})
    }

    toggleMenu = () => {
        this.setState({menuActive: !this.state.menuActive});
    }

    toggleNav = (element = null) => () => {

        this.setState({edit: false, settings: false, help: false, logout: false})

        if (element === 'edit') {
            this.setState({edit: true})
        } else if (element === 'settings') {
            this.setState({settings: true})
        } else if (element === 'help') {
            this.setState({help: true})
        } else if (element === 'logout') {
            this.setState({logout: true})
        }

    }

    closeMenuAndLogout = (dispatch) => {
        this.toggleMenu();
        this.props.logout();
    }


    render() {
        return <Header {...this.props}
                       hover={this.onMouseEnterHandler}
                       leave={this.onMouseLeaveHandler}
                       toggleMenu={this.toggleMenu}
                       toggleNav={this.toggleNav}
                       state={this.state}
                       closeMenuAndLogout={this.closeMenuAndLogout}
        />

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    logout: state.auth.logout,
    avatar: state.auth.avatar
})

export default connect(mapStateToProps, {logout, getAuthUserData})(HeaderContainer);