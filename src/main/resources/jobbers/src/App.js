import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import Login from './pages/Login/Login'
// import PrincipalApp from './pages/PrincipalApp/PrincipalApp'
import Cadastro from './pages/Cadastro/Cadastro'
import CadastroPrestador from './pages/CadastroPrestador/CadastroPrestador';


export default class App extends Component {
    render() {
        return ( <
            React.Fragment >

            { /* <Login /> */ } <
            CadastroPrestador / > { /* <PrincipalApp /> */ } { /* <Cadastro /> */ } <
            /React.Fragment>
        )
    }
}