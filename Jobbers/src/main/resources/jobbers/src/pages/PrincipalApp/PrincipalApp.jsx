import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// import Routes from './Routes'
import Main from '../Main/Main'
import HashRouter from 'react-router-dom/HashRouter';
import Home from '../components/Home/Home';
import Perfil from '../components/Perfil/Perfil';
import Pesquisa from '../components/Pesquisa/Pesquisa';
import axios from 'axios';

let url = "http://localhost:8080"
// let dados;
export default class PrincipalApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actualPage: 0,
            user: {
                nome: "",
                estado: "",
                cidade: "",
                rua: "",
                numero: "",
                telefone: "",
                email: ""
            },
            servico: ""
        }
    }

    handleChangePage = (page) => {
            const state = Object.assign({}, this.state);
            state.actualPage = page;
            this.setState(state);
    }

    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                return <Pesquisa/>
            case 2:
                this.usuario()
                return <Perfil usuario={this.usuario}/>
            default:
                return <Home />
        }
    }

    usuario = () => {
        let id = localStorage.getItem('id')
        let urlUsuario = url+"/user/"+id
        axios.get(urlUsuario).then(res => {
            localStorage.setItem('id', res.data.id)
            localStorage.setItem('nome', res.data.nome)
            localStorage.setItem('cidade', res.data.cidade);
            localStorage.setItem('estado', res.data.estado);
            localStorage.setItem('rua', res.data.rua);
            localStorage.setItem('numero', res.data.numero);
            localStorage.setItem('telefone', res.data.telefone);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('login', res.data.credenciais.login);
            localStorage.setItem('senha', res.data.credenciais.senha);
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <HashRouter>
                <div className="app">
                    <NavBar change={this.handleChangePage} />
                    {/* icon="home" title="Início" */}
                    <Main >
                        {this.handleActualPage()}
                    </Main>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}    