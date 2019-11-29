import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'

export default class Contratacao extends React.Component{
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

    escritaBotao() {
        const state = Object.assign({}, this.state);
        if(state.botao === true) {
            state.botaoEscrita = "Editar"
        } else {
            state.botaoEscrita = "Salvar"
        }
        this.setState(state)
    }

    componentDidMount() {
        const state = Object.assign({}, this.state);
        state.user.id = localStorage.getItem('idPrestador')
        state.user.nome = localStorage.getItem('nomePrestador')
        state.user.cidade = localStorage.getItem('cidadePrestador')
        state.user.estado = localStorage.getItem('estadoPrestador')
        state.user.rua = localStorage.getItem('ruaPrestador')
        state.user.numero = localStorage.getItem('numeroPrestador')
        state.user.celular = localStorage.getItem('celularPrestador')
        state.user.email = localStorage.getItem('emailPrestador')
        state.user.tipo_servico = localStorage.getItem('tipo_servicoPrestador')
        state.user.descricao = localStorage.getItem('descricaoPrestador')
        state.user.valor = localStorage.getItem('valorPrestador')
        state.user.credenciais.login = localStorage.getItem('loginPrestador')
        state.user.credenciais.senha = localStorage.getItem('senhaPrestador')
        this.setState(state);
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <div class="imagen mt-4 mb-4">
                    <span className="fa fa-user"></span>
                </div>
                <span className="descricao" id="nomePrestador">Nome:</span>
                <span className=" inputSemBorda" type="texto" name="inputNomePrestador" id="inputNomePrestador">{this.state.user.nome}</span><br/>
                <span className="descricao" id="estadoPrestador">Estado:</span>
                <span className=" inputSemBorda" type="texto" name="inputEstadoPrestador"  id="inputEstadoPrestador">{this.state.user.estado}</span><br/>
                <span className="descricao" id="cidadePrestador">Cidade:</span>
                <span className=" inputSemBorda" type="texto" name="inputCidadePrestador"  id="inputCidadePrestador">{this.state.user.cidade}</span><br/>
                <span className="descricao" id="telefonePrestador">Telefone para Contato:</span>
                <span className=" inputSemBorda" type="texto" name="inputTelefonePrestador"  id="inputTelefonePrestador">{this.state.user.celular}</span><br/>
                <span className="descricao" id="emailPrestador">Email:</span>
                <span className=" inputSemBorda" type="texto" name="inputEmailPrestador"  id="inputEmailPrestador">{this.state.user.email}</span><br/>
                <span className="descricao" id="profissaoPrestador">Profissão:</span>
                <span className=" inputSemBorda" type="texto" name="inputProfissaoPrestador"  id="inputProfissaoPrestador">{this.state.user.tipo_servico}</span><br/>
                <span className="descricao" id="valorServicoPrestador">Valor de serviço (diaria):</span>
                <span className=" inputSemBorda" type="texto" name="inputValorServicoPrestador"  id="inputValorServicoPrestador">{this.state.user.valor}</span><br/>
                <textarea name="inputSemBorda" id="descricapoServico" cols="82" rows="10" disabled="true">{this.state.user.descricao}</textarea>
                <button className="buttonPrestador" id="denunciarButton">Denunciar</button>
                <button className="buttonPrestador" id="contratarButton">Contratar</button>
            </React.Fragment>
        )
    }
}