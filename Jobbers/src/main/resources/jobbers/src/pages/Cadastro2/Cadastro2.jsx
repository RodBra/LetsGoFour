import React, { Component } from 'react'
import './cadastro2.css'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

let url = "http://localhost:8080"
class Cadastro2 extends Component {

    constructor(props){
        super(props);

        this.state ={
            nomeUsuario:'',
            telefone:'',
            email:'',
            confEmail:'',
            apelido:'',
            senha:'',
            confSenha:'',
            estado:'',
            cidade:'',
            rua:'',
            numero:'',
            check:false
        }
    }

    handleChange =  (event) => {
        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value;

        this.setState(state);
    }

    isChecked = () =>{
        this.setState(prevState=>({
            check:!prevState.check
        }))
    }

    cadastro = () => {
        let nome = this.state.nomeUsuario
        let email = this.state.email
        let login = this.state.apelido
        let senha = this.state.senha
        let estado = this.state.estado
        let cidade = this.state.cidade
        let rua = this.state.rua
        let numero = this.state.numero
        
        let dados = {
            nome: nome,
            email:email,
            credenciais: {
                login: login,
                senha: senha
            },
            estado: estado,
            cidade: cidade,
            rua: rua,
            numero: numero,
            prestador: false
        }


        axios.post(url+"/cadastrar/contratante", dados).then(res => {
            console.log(res);
            this.props.history.push('/');
        }).catch(e => {
            console.log("deu ruim " + e)
        })
    }


    render() {
        return (
            <div>
                <div className="div-titulo">
                    <h1 className="h1-cadastro">Cadastro</h1>
                </div>
                <form action="">
                    <h2 className="h2" id="h2-info">Informações Pessoais</h2><br/>
                    <label className="labelgran" id="label-nome">Nome Completo</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="nomeUsuario" id="nomeUsuario" className="inputgran"/><br/>
                    <label className="labelgran" id="label-telefone1">Telefone/Celular</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="telefone" id="telefone" className="inputgran"/><br/>
                    <h2 className="h2" id="h2-login">Dados de Login</h2><br/>
                    <label className="labelgran" id="label-email">Email</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="email" name="email" id="email" className="inputgran"/><br/>
                    <label className="labelgran" id="label-confEmail">Confirmar Email</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="email" name="confEmail" id="confEmail" className="inputgran"/><br/>
                    <label className="labelgran" id="label-apelido">Apelido</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="apelido" id="apelido" className="inputgran"/><br/>
                    <label className="labelpeq labelpri" id="label-senha">Senha</label>
                    <label className="labelpeq labelseg" id="label-confSenha">Confirmar senha</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="password" name="senha" id="senha" className="inputpeqpri inputpeq"/>
                    <input onChange={(e) => this.handleChange(e)} type="password" name="confSenha" id="confSenha" className="inputpeqseg inputpeq"/><br/>
                    <h2 className="h2" id="h2-endereco">Endereco</h2><br/>
                    <label className="labelpeq labelpri" id="label-estado">Estado</label>
                    <label className="labelpeq labelseg" id="label-cidade">Cidade</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="estado" id="estado" className="inputpeqpri inputpeq"/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="cidade" id="cidade" className="inputpeqseg inputpeq"/><br/>
                    <label className="labelpeq labelpri" id="label-rua">Rua</label>
                    <label className="labelpeq labelseg" id="label-numero">Numero</label><br/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="rua" id="rua" className="inputpeqpri inputpeq"/>
                    <input onChange={(e) => this.handleChange(e)} type="texto" name="numero" id="numero" className="inputpeqseg inputpeq"/><br/>
                    <div className="termo">
                        <input onChange={(e) => this.isChecked(e)} type="checkbox" id="check"/> <label htmlFor="check">Concordo com os termos de uso</label><br/>
                    </div>  
                    <button type="button" className="botaoCadastra" onClick={this.cadastro}>Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Cadastro2);