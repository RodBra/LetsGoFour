import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'


import Logo from '../components/Logo'
// import Home from '../components/Home/Home'
import Pesquisa from '../components/Pesquisa/Pesquisa'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class PrincipalApp extends Component {
    render() {
        return ( 
            <div className="app">
                <Logo/>
                <NavBar/>
                {/* <Home/> */}
                <Pesquisa/>
                <Footer/>
            </div>

        );
    }
}