import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home/Home';
import Pesquisa from '../components/Pesquisa/Pesquisa';
import Perfil from '../components/Perfil/Perfil';
import PerfilPrestador from '../components/PerfilPrestador/PerfilPrestador';
import Contratacao from '../components/Contratacao/Contratacao'

export default class Routes extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" render={Home}/>
                    <Route from='/home/pesquisa' render={Pesquisa}/>
                    <Route from='/home/perfil' render={Perfil}/>
                    <Route from='/home/perfilPrestador' render={(props) => <PerfilPrestador/>}/>
                    <Route from='/home/contratacao' render={(props) => <Contratacao/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
} 