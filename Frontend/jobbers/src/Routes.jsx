import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cadastro2 from './pages/Cadastro2/Cadastro2';
import Login from './pages/Login/Login';
import PrincipalApp from './pages/PrincipalApp/PrincipalApp';
import CadastroPrestador from './pages/CadastroPrestador/CadastroPrestador'
import PrincipalAppPrestador from './pages/appPrestador/PrincipalApp/PrincipalAppPrestador'

export default props => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route from='/home' component={PrincipalApp}/>
            <Route from='/homePrestador' component={PrincipalAppPrestador}/>
            <Route from='/register' component={Cadastro2}/>
            <Route from='/registerPrestador' component={CadastroPrestador}/>
        </Switch>
    </BrowserRouter>