import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Routes from './Routes'
import HashRouter from 'react-router-dom/HashRouter';

export default class PrincipalApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }

    componentDidMount() {
        const state = Object.assign({}, this.state);
        state.id = localStorage.getItem('id');
        this.setState(state);
    }

    render() {
        return(
            <HashRouter>
                <div className="app">
                    <NavBar id={this.state.id}/>
                    <Routes />
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}    