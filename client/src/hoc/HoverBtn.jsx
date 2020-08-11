import React from "react";
import {connect} from "react-redux";

export const HoverBtn = (Component) => {
    class HoverComponent extends React.Component {
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

        render(){
            return <Component isHover={this.state.isHover} toggleHover={this.toggleHover} {...this.props} />
        }
    }

    return HoverComponent;
}