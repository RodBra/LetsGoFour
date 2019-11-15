import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import NavBarPrestador from '../components/NavBarPrestador'
import Footer from '../components/Footer'

import Routes from './Routes'
import HashRouter from 'react-router-dom/HashRouter';

export default class PrincipalAppPrestador extends Component {

    render() {
        return(
            <HashRouter>
                <div className="app">
                    <NavBarPrestador />
                    <Routes />
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}    