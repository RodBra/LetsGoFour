import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

// import Login from './pages/Login/Login'
import Logo from '../components/Logo'
import Main from '../Main/Main'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class PrincipalApp extends Component {
    render() {
        return ( 
            <div className="app">
                <Logo/>
                <NavBar/>
                <Main icon="home" title="Início"/>
                <Footer/>
            </div>

        );
    }
}