import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import { HashRouter } from 'react-router-dom'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


import Home from '../components/Home/Home';
// import Pesquisa from '../components/Pesquisa/Pesquisa';
// import Perfil from '../components/Perfil/Perfil'

export default class PrincipalApp extends Component {
    render() {
        return (
            // <HashRouter>
            <div className="app">
                <Logo />
                <NavBar />
                <Home />
                {/* <Pesquisa /> */}
                {/* <Perfil /> */}
                <Footer />
            </div>
            // </HashRouter>

        );
    }
}