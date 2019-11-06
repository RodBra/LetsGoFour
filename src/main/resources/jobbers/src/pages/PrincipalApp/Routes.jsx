import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home/Home';
import Pesquisa from '../components/Pesquisa/Pesquisa';
import Perfil from '../components/Perfil/Perfil';

export default props => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route from='/home/search' component={Pesquisa}/>
            <Route from='/home/profile' component={Perfil}/>
        </Switch>
    </BrowserRouter>
    
    
    
    