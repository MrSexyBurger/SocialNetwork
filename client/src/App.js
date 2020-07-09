import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import {NavLink, Route} from "react-router-dom";
import RegistrationContainer from "./components/RegistrationPage/RegistrationContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <Route path='/registration' render={() => <RegistrationContainer/>}/>
            <Content />
            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br/>
            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            <NavLink to={'/registration'}>Регистрация</NavLink>
        </div>
    );
}

export default App;
