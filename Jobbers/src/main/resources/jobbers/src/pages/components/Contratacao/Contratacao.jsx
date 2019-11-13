import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import Main from '../../Main/Main'

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

    render() {
        return (
            <Main icon="user" title="Perfil Prestador">
                <div class="imagen mt-4 mb-4">
                    <span className="fa fa-user"></span>
                </div>
                <span className="descricao" id="nomePrestador">Nome:</span>
                <span className=" inputSemBorda" type="texto" name="inputNomePrestador" id="inputNomePrestador"></span><br/>
                <span className="descricao" id="idadePrestador">Idade:</span>
                <span className=" inputSemBorda" type="texto" name="inputIdadePrestador"  id="inputIdadePrestador"></span><br/>
                <span className="descricao" id="estadoPrestador">Estado:</span>
                <span className=" inputSemBorda" type="texto" name="inputEstadoPrestador"  id="inputEstadoPrestador"></span><br/>
                <span className="descricao" id="cidadePrestador">Cidade:</span>
                <span className=" inputSemBorda" type="texto" name="inputCidadePrestador"  id="inputCidadePrestador"></span><br/>
                <span className="descricao" id="telefonePrestador">Telefone para Contato:</span>
                <span className=" inputSemBorda" type="texto" name="inputTelefonePrestador"  id="inputTelefonePrestador"></span><br/>
                <span className="descricao" id="emailPrestador">Email:</span>
                <span className=" inputSemBorda" type="texto" name="inputEmailPrestador"  id="inputEmailPrestador"></span><br/>
                <span className="descricao" id="profissaoPrestador">Profissão:</span>
                <span className=" inputSemBorda" type="texto" name="inputProfissaoPrestador"  id="inputProfissaoPrestador"></span><br/>
                <span className="descricao" id="valorServicoPrestador">Valor de serviço (diaria):</span>
                <span className=" inputSemBorda" type="texto" name="inputValorServicoPrestador"  id="inputValorServicoPrestador"></span><br/>
                <span className="descricao" id="formacaoPrestador">Formações:</span>
                <span className=" inputSemBorda" name="inputFormacao" id="inputFormacao" disabled="true" cols="30" rows="2"></span><br/>
                <textarea name="inputSemBorda" id="descricapoServico" cols="92" rows="10" disabled="true"></textarea>
                <button className="buttonPrestador" id="denunciar">Denunciar</button>
                <button className="buttonPrestador" id="contato">Entrar em contato</button>
                <button className="buttonPrestador" id="contratar">Contratar</button>
            </Main>
        )
    }
}