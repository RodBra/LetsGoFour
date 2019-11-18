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
        // let id = this.props.location.pathname
        // console.log(this.props)
        // id = id.replace("/home/", "" );
        // id = id.replace("#/", "" );

        // const state = Object.assign({}, this.state);

        // state.id = id;

        // this.setState(state);
        console.log(localStorage.getItem('login'))
    }

    apenasNumeros = (string) => {
        var numsStr = string.replace(/[^0-9]/g,'');
        return parseInt(numsStr);
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