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
                rua: "",
                telefone: "",
                tipo_servico: "",
                valor: 0
            },
            servico: ""
        }
    }

    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                this.usuario()
                return <PerfilPrestador nome={this.state.user.nome} estado={this.state.user.estado} cidade={this.state.user.cidade}
                celular={this.state.user.celular} profissao={this.state.user.tipo_servico} descricao={this.state.user.descricao}
                valor={this.state.user.valor} rua={this.state.user.rua} numero={this.state.user.numero}/>
            default:
                return <Home />
        }
    }

    usuario = () => {
        let id = localStorage.getItem('id')
        let urlUsuario = url+"/userPrestador/"+id
        axios.get(urlUsuario).then(res => {
            const state = Object.assign({}, this.state);
            state.user.nome = res.data.nome;
            state.user.cidade = res.data.cidade;
            state.user.estado = res.data.estado;
            state.user.rua = res.data.rua;
            state.user.numero = res.data.numero;
            state.user.celular = res.data.celular;
            state.user.telefone = res.data.telefone;
            state.user.email = res.data.email;
            state.user.tipo_servico = res.data.tipo_servico;
            state.user.descricao = res.data.descricao;
            state.user.valor = res.data.valor;
            this.setState(state);
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