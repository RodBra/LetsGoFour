import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrincipalApp from './PrincipalApp/PrincipalApp';
import Cadastro from './Cadastro/Cadastro';
import CadastroPrestador from './CadastroPrestador/CadastroPrestador';
import Login from './Login/Login';


export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PrincipalApp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/cadastroPrestador" component={CadastroPrestador}/>

                </Switch>
            </BrowserRouter>
        );
    }
}