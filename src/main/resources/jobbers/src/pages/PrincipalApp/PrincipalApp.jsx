import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Routes from './Routes'
import HashRouter from 'react-router-dom/HashRouter';

export default props =>
    <HashRouter>
        <div className="app">
            <NavBar />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
        
        
        
        
        
        
        
        
        
