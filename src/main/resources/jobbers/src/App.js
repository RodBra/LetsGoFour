import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

// import PrincipalApp from './pages/PrincipalApp/PrincipalApp'
// import Cadastro from './pages/Cadastro/Cadastro'
// import CadastroPrestador from './pages/CadastroPrestador/CadastroPrestador';
// import PrincipalApp from './pages/PrincipalApp/PrincipalApp';
import Routes from './Routes';
// import Cadastro2 from './pages/Cadastro2/Cadastro2';
// import Login from '../src/pages/Login/Login'
// import Login from './pages/Login2/Login1'

export default class App extends Component {
    render() {
        return ( 
            // <Login />
            // <CadastroPrestador/>
            <Routes/>
            // <Cadastro2/>
            // <PrincipalApp/>
        )
    }
}