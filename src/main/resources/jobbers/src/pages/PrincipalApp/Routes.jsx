import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home/Home';
import Pesquisa from '../components/Pesquisa/Pesquisa';
import Perfil from '../components/Perfil/Perfil';
import PerfilPrestador from '../components/PerfilPrestador/PerfilPrestador';

export default class Routes extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" render={Home}/>
                    <Route from='/home/search' render={Pesquisa}/>
                    <Route from='/home/profile' render={Perfil}/>
                    <Route from='/home/profilePrestador' render={(props) => <PerfilPrestador/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
} 
    
    
    
    