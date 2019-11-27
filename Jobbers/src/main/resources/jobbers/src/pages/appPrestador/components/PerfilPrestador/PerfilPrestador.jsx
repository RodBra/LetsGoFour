import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import axios from 'axios'

let url = "http://localhost:8080"
export default class PerfilPrestador extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            botao: true,
            botaoEscrita: "Editar",
            user: {
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
            }
        }
    }

    handleChange = event => {
        const state = Object.assign({}, this.state);
        console.log(state.user.nome)
        let field = event.target.id;
        state.user[field] = event.target.value;
        this.setState(state);
        console.log(state.user.nome)
    };

    componentDidMount() {
        const state = Object.assign({}, this.state);
        state.user.id = localStorage.getItem('id')
        state.user.nome = localStorage.getItem('nome')
        state.user.cidade = localStorage.getItem('cidade')
        state.user.estado = localStorage.getItem('estado')
        state.user.rua = localStorage.getItem('rua')
        state.user.numero = localStorage.getItem('numero')
        state.user.celular = localStorage.getItem('celular')
        state.user.telefone = localStorage.getItem('telefone')
        state.user.email = localStorage.getItem('email')
        state.user.tipo_servico = localStorage.getItem('tipo_servico')
        state.user.descricao = localStorage.getItem('descricao')
        state.user.valor = localStorage.getItem('valor')
        state.user.credenciais.login = localStorage.getItem('login')
        state.user.credenciais.senha = localStorage.getItem('senha')
        this.setState(state);

    }

    escritaBotao() {
        const state = Object.assign({}, this.state);
        if(state.botao) {
            state.botaoEscrita = "Editar"
        } else {
            state.botaoEscrita = "Salvar"
        }
        this.setState(state)
    }

    habilitaDesabilita = e => {
        const state = Object.assign({}, this.state);
        state.botao = !state.botao;
        this.setState(state)
        if(e.target.id === "salvar") {
            let user = this.state.user
            axios.put(url+"/updatePrestador", user).
            then(res => {
                console.log(res.data)
                this.props.usuario()
            }).catch(e => {
                console.log("deu ruim")
            })
        }
    }

    handleChange = event => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state.user[field] = event.target.value;
        this.setState(state);
        // console.log(state.user.nome)
    }

    render() {
        return (
            <React.Fragment>
                <div class="imagen mt-4 mb-4">
                    <span className="fa fa-user"></span>
                </div>
                <span className="descricao" id="nomePrestador">Nome:</span>
                <input className="inputPestador inputNomePrestador" type="texto" name="inputNomePrestador" disabled={this.state.botao} id="nome" value={this.state.user.nome} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="estadoPrestador">Estado:</span>
                <input className="inputPestador inputEstadoPrestador" type="texto" name="inputEstadoPrestador" disabled={this.state.botao} id="estado" value={this.state.user.estado} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="cidadePrestador">Cidade:</span>
                <input className="inputPestador inputCidadePrestador" type="texto" name="inputCidadePrestador" disabled={this.state.botao} id="cidade" value={this.state.user.cidade} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="telefonePrestador">Telefone para Contato:</span>
                <input className="inputPestador inputTelefonePrestador" type="texto" name="inputTelefonePrestador" disabled={this.state.botao} id="telefone" value={this.state.user.celular} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="emailPrestador">Email:</span>
                <input className="inputPestador inputEmailPrestador" type="texto" name="inputEmailPrestador" disabled={this.state.botao} id="email" value={this.state.user.email} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="profissaoPrestador">Profissão:</span>
                <input className="inputPestador inputProfissaoPrestador" type="texto" name="inputProfissaoPrestador" disabled={this.state.botao} id="tipo_servico" value={this.state.user.tipo_servico} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="valorServicoPrestador">Valor de serviço (diaria):</span>
                <input className="inputPestador inputValorServicoPrestador" type="texto" name="inputValorServicoPrestador" disabled={this.state.botao} id="valor" value={this.state.user.valor} onChange={e => this.handleChange(e)}/><br/>
                <span className="descricao" id="idDescrip">Descrição:  </span>
                <textarea className="descricapoServico" rows="10" id="descricao" disabled={this.state.botao} onChange={e => this.handleChange(e)} value={this.state.user.descricao}></textarea>
                <button className="buttonPrestador" id="editar" disabled={!this.state.botao} onClick={e => this.habilitaDesabilita(e)}>Editar</button>
                <button className="buttonPrestador" id="salvar" disabled={this.state.botao} onClick={e => this.habilitaDesabilita(e)}>Salvar</button>
            </React.Fragment>
        )
    }
}