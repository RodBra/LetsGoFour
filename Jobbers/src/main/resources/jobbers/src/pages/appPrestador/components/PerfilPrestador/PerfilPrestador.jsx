import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import MainPrestador from '../../MainPrestador/MainPrestador';

export default class PerfilPrestador extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            botao: true,
            botaoEscrita: "Editar"
        }
    }

    escritaBotao() {
        const state = Object.assign({}, this.state);
        if(state.botao === true) {
            state.botaoEscrita = "Editar"
        } else {
            state.botaoEscrita = "Salvar"
        }
        this.setState(state)
    }

    habilitaDesabilita() {
        const state = Object.assign({}, this.state);
        state.botao = !state.botao;
        this.setState(state)
    }



    render() {
        return (
            <MainPrestador icon="user" title="Perfil Prestador">
                <div class="imagen mt-4 mb-4">
                    <span className="fa fa-user"></span>
                </div>
                <span className="descricao" id="nomePrestador">Nome:</span>
                <input className="inputPestador" type="texto" name="inputNomePrestador" disabled={this.state.botao} id="inputNomePrestador"/><br/>
                <span className="descricao" id="idadePrestador">Idade:</span>
                <input className="inputPestador" type="texto" name="inputIdadePrestador" disabled={this.state.botao} id="inputIdadePrestador"/><br/>
                <span className="descricao" id="estadoPrestador">Estado:</span>
                <input className="inputPestador" type="texto" name="inputEstadoPrestador" disabled={this.state.botao} id="inputEstadoPrestador"/><br/>
                <span className="descricao" id="cidadePrestador">Cidade:</span>
                <input className="inputPestador" type="texto" name="inputCidadePrestador" disabled={this.state.botao} id="inputCidadePrestador"/><br/>
                <span className="descricao" id="telefonePrestador">Telefone para Contato:</span>
                <input className="inputPestador" type="texto" name="inputTelefonePrestador" disabled={this.state.botao} id="inputTelefonePrestador"/><br/>
                <span className="descricao" id="emailPrestador">Email:</span>
                <input className="inputPestador" type="texto" name="inputEmailPrestador" disabled={this.state.botao} id="inputEmailPrestador"/><br/>
                <span className="descricao" id="profissaoPrestador">Profissão:</span>
                <input className="inputPestador" type="texto" name="inputProfissaoPrestador" disabled={this.state.botao} id="inputProfissaoPrestador"/><br/>
                <span className="descricao" id="valorServicoPrestador">Valor de serviço (diaria):</span>
                <input className="inputPestador" type="texto" name="inputValorServicoPrestador" disabled={this.state.botao} id="inputValorServicoPrestador"/><br/>
                <span className="descricao" id="formacaoPrestador">Formações:</span>
                <input className="inputPestador" name="inputFormacao" id="inputFormacao" disabled={this.state.botao} cols="30" rows="2"></input><br/>
                <span className="descricao" id="idDescrip">Descrição:  </span>
                <textarea name="descricapoServico" id="descricapoServico" rows="10" disabled={this.state.botao}></textarea>
                <button className="buttonPrestador" id="editar" disabled={!this.state.botao} onClick={() => this.habilitaDesabilita()}>Editar</button>
                <button className="buttonPrestador" id="salvar" disabled={this.state.botao} onClick={() => this.habilitaDesabilita()}>Salvar</button>
            </MainPrestador>
        )
    }
}