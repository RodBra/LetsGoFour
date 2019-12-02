import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home/Home';
import PerfilPrestador from '../components/PerfilPrestador/PerfilPrestador';

export default class Routes extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/homePrestador" render={Home}/>
                    <Route from='/homePrestador/perfilPrestador' render={(props) => <PerfilPrestador/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
} 