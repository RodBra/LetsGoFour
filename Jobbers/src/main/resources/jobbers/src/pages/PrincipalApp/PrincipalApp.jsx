import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Main from '../Main/Main'
import HashRouter from 'react-router-dom/HashRouter';
import Home from '../components/Home/Home';
import Perfil from '../components/Perfil/Perfil';
import Pesquisa from '../components/Pesquisa/Pesquisa';
import axios from 'axios';
import Contratacao from '../components/Contratacao/Contratacao';

let url = "http://localhost:8080"
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
            usuarioContratacao: {
                id: "",
                nome: "",
                cidade: "",
                estado: "",
                rua: "",
                numero: "",
                celular: "",
                telefone: "",
                email: "",
                tipo_servico: "",
                descricao: "",
                valor: "",
                profissao: "",
                credenciais: {
                  login: "",
                  senha: ""
                },
                prestador: true
            },
            servico: ""
        }
    }

    handleChangePage = (page) => {
            const state = Object.assign({}, this.state);
            state.actualPage = page;
            this.setState(state);
    }

    handleChangePageContratacao = (page, id) => {
        const state = Object.assign({}, this.state);
        state.actualPage = page;
        this.usuarioPrestador(id, state);
    }


    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                return <Pesquisa change={this.handleChangePageContratacao}/>
            case 2:
                this.usuario()
                return <Perfil usuario={this.usuario}/>
            case 3:
                return <Contratacao usuarioContratacao={this.state.usuarioContratacao}/>
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

    usuarioPrestador = (id, state2) => {
        let urlUsuario = url+"/userPrestador/"+id
        axios.get(urlUsuario).then(res => {
            const state = Object.assign({}, this.state);
            state.usuarioContratacao.id = res.data.id
            state.usuarioContratacao.nome = res.data.nome
            state.usuarioContratacao.cidade = res.data.cidade
            state.usuarioContratacao.estado = res.data.estado
            state.usuarioContratacao.rua = res.data.rua
            state.usuarioContratacao.numero = res.data.numero
            state.usuarioContratacao.celular = res.data.celular
            state.usuarioContratacao.email = res.data.email
            state.usuarioContratacao.tipo_servico = res.data.tipo_servico
            state.usuarioContratacao.descricao = res.data.descricao
            state.usuarioContratacao.valor = res.data.valor
            console.log(state.usuarioContratacao.nome + " nome")
            this.setState(state);
            this.setState(state2);
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <HashRouter>
                <div className="app">
                    <NavBar change={this.handleChangePage} />

                    <Main >
                        {this.handleActualPage()}
                    </Main>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}    