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
            servico: ""
        }
    }

    handleChange = event => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state.userPrestReq[field] = event.target.value;
        this.setState(state);
        // console.log(state.user.nome)
    };


    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                // this.usuario()
                // return <PerfilPrestador nome={this.state.user.nome} estado={this.state.user.estado} cidade={this.state.user.cidade}
                // celular={this.state.user.celular} profissao={this.state.user.tipo_servico} descricao={this.state.user.descricao}
                // valor={this.state.user.valor} email={this.state.user.email} rua={this.state.user.rua} numero={this.state.user.numero}
                // change={this.handleChange}/>
                return <PerfilPrestador usuario={this.usuario}/>
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
        }).catch(e => {
            console.log(e)
        })
    }

    handleChangePage = (page) => {
        const state = Object.assign({}, this.state);
        state.actualPage = page;
        this.setState(state);
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