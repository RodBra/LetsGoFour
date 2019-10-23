import React, { Component } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home/Home'
import Perfil from '../components/Perfil/Perfil';
import Pesquisa from '../components/Pesquisa/Pesquisa'

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="#/profile" component={Perfil} />
                    <Route path="#/search" component={Pesquisa} />
                </Switch>
            </BrowserRouter>
        );
    }
}