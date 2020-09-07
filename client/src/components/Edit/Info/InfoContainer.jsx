import React from "react";
import Info from "./Info";
import {connect} from "react-redux";

class InfoContainer extends React.Component {
    render() {
        return <Info/>
    }
}

const mapStateToProps = state => {
    return {
        edit: state.edit
    }
}

export default connect(mapStateToProps)(InfoContainer);