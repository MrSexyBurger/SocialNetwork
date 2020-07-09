import React from "react";
import Error from "./Error";

class ErrorContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorOpened: false,
            hover: false,
            position: this.props.position,
            size: this.props.size
        }
    }

    toggleError = () => {
        this.setState({errorOpened: !this.state.errorOpened})
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        return (
            <Error errorOpend={this.state.errorOpened}
                   toggleError={this.toggleError}
                   error={this.props.error}
                   hover={this.state.hover}
                   toggleHover={this.toggleHover}
                   position={this.state.position}
                   size={this.state.size}
            />
        )
    }
}

export default ErrorContainer;