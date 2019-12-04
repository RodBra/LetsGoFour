import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/app.css'

import NavBarPrestador from '../components/NavBarPrestador'
import Footer from '../components/Footer'
import Home from '../components/Home/Home'
import PerfilPrestador from '../components/PerfilPrestador/PerfilPrestador';
import MainPrestador from '../MainPrestador/MainPrestador';
import AgendadosPrestador from '../components/AgendadosPrestador/AgendadosPrestador'
import axios from 'axios'

let url = "http://localhost:8080"
export default class PrincipalAppPrestador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPage: 0,
            user: {
                celular: "",
                cidade: "",
                descricao: "",
                email: "",
                estado: "",
                nome: "",
                numero: 0,
                profissao: "",
                rua: "",
                telefone: "",
                tipo_servico: "",
                valor: 0
            },
            servico: "",
            icon: '',
            title: ''
        }
    }

    componentDidMount() {
        this.usuario()
        console.log(localStorage.getItem('id'))
    }

    handleChange = event => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state.userPrestReq[field] = event.target.value;
        this.setState(state);
    };



    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                this.usuario()
                return <PerfilPrestador usuario={this.usuario}/>
            case 2:
                return <AgendadosPrestador />
            default:
                return <Home />
        }
    }

    usuario = () => {
        let id = localStorage.getItem('id')
        let urlUsuario = url+"/userPrestador/"+id
        axios.get(urlUsuario).then(res => {
            localStorage.setItem('id', res.data.id)
            localStorage.setItem('nome', res.data.nome)
            localStorage.setItem('cidade', res.data.cidade);
            localStorage.setItem('estado', res.data.estado);
            localStorage.setItem('rua', res.data.rua);
            localStorage.setItem('numero', res.data.numero);
            localStorage.setItem('celular', res.data.celular);
            localStorage.setItem('telefone', res.data.telefone);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('tipo_servico', res.data.tipo_servico);
            localStorage.setItem('descricao', res.data.descricao);
            localStorage.setItem('valor', res.data.valor);
            localStorage.setItem('login', res.data.credenciais.login);
            localStorage.setItem('senha', res.data.credenciais.senha);
            console.log(localStorage.getItem('valor'))
        }).catch(e => {
            console.log(e)
        })
    }

    handleChangePage = (page) => {
        const state = Object.assign({}, this.state);
        state.actualPage = page;
        this.setState(state);
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
            <div className="app">
                <NavBarPrestador change={this.handleChangePage} />
                <MainPrestador>
                    {this.handleActualPage()}
                </MainPrestador>
                <Footer />
            </div>
        )
    }
}    