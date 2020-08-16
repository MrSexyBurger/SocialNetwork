import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import {Route} from "react-router-dom";
import RegistrationContainer from "./components/RegistrationPage/RegistrationContainer";

function App() {

    return (
        <div className="App">
            <HeaderContainer />
            <Route path='//' render={() => <RegistrationContainer/>}/>
            <Content />
        </div>
    );
}

export default App;
