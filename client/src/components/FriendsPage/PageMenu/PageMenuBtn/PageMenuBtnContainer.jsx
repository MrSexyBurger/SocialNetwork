import React from "react";
import PageMenuBtn from "./PageMenuBtn";

class PageMenuBtnContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            btnName: this.props.btnName,
            sectionName: this.props.sectionName,
            isActive: this.props.currentSection == this.props.sectionName ? true : false
        }
    }

    toggleHover = () => {
        this.setState({isHover: !this.state.isHover});
    }

    changeSection = () => {
        this.props.getUsers(this.state.sectionName);
    }

    componentWillReceiveProps(props) {
        //console.log(props.currentSection)
        if (props.currentSection == props.sectionName){
            this.setState({
                isActive: true
            })
        }else {
            this.setState({
                isActive: false
            })
        }
    }

    render() {
        return <PageMenuBtn state={this.state}
                            toggleHover={this.toggleHover}
                            changeSection={this.changeSection}
        />
    }
}


export default PageMenuBtnContainer;