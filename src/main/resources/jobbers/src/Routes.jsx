import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cadastro2 from './pages/Cadastro2/Cadastro2';
import Login from './pages/Login2/Login1';
import PrincipalApp from './pages/PrincipalApp/PrincipalApp';
import CadastroPrestador from './pages/CadastroPrestador/CadastroPrestador'

export default props => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route from='/home' component={PrincipalApp}/>
            <Route from='/register' component={Cadastro2}/>
            <Route from='/registerPrestador' component={CadastroPrestador}/>
        </Switch>
    </BrowserRouter>