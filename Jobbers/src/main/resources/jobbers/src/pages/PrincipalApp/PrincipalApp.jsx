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
                return <Perfil nome={this.state.user.nome} cidade={this.state.user.cidade}
                estado={this.state.user.estado} rua={this.state.user.rua} numero={this.state.user.numero}
                telefone={this.state.user.telefone} email={this.state.user.email}/>
            default:
                return <Home />
        }
    }

    usuario = () => {
        let id = localStorage.getItem('id')
        let urlUsuario = url+"/user/"+id
        axios.get(urlUsuario).then(res => {
            const state = Object.assign({}, this.state);
            state.user.nome = res.data.nome;
            state.user.cidade = res.data.cidade;
            state.user.estado = res.data.estado;
            state.user.rua = res.data.rua;
            state.user.numero = res.data.numero;
            state.user.telefone = res.data.telefone;
            state.user.email = res.data.email;
            this.setState(state);
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