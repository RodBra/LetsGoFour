import React from 'react';
// import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'

import Home from './pages/components/Home/Home';
import Pesquisa from './pages/components/Pesquisa/Pesquisa';
import Perfil from './pages/components/Perfil/Perfil';

export default props => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route from='/search' component={Pesquisa}/>
            <Route from='/profile' component={Perfil}/>
        </Switch>
    </BrowserRouter>
    
    
    
    