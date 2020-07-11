import React from "react";
import Menu from "./Menu";

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendMoney: false,
            notify: false,
            streams: false,
            bookmarks: false,
            news: false,
            report: false,
            memories: false,
            transfers: false
        }
    }

    toggleHover = (target) => () => {
        this.setState({
            sendMoney: false,
            notify: false,
            streams: false,
            bookmarks: false,
            news: false,
            report: false,
            memories: false,
            transfers: false
        })

        if (target === 'sendMoney') {
            this.setState({sendMoney: true})
        } else if (target === 'notify') {
            this.setState({notify: true})
        }else if (target === 'streams') {
            this.setState({streams: true})
        } else if (target === 'bookmarks') {
            this.setState({bookmarks: true})
        } else if (target === 'news') {
            this.setState({news: true})
        } else if (target === 'report') {
            this.setState({report: true})
        } else if (target === 'memories') {
            this.setState({memories: true})
        } else if (target === 'transfers') {
            this.setState({transfers: true})
        }

    }

    render() {
        return (
            <Menu state={this.state} guest={this.props.guest} toggleMenu={this.props.toggleMenu} toggleHover={this.toggleHover}/>
        )
    }
}

export default MenuContainer;