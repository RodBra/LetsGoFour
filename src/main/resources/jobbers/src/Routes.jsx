import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login2/Login1';
import PrincipalApp from './pages/PrincipalApp/PrincipalApp';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/components/Home/Home';

export default props => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route from='/home' component={PrincipalApp}/>
            <Route from='/register' component={Cadastro}/>
        </Switch>
    </BrowserRouter>