import React, { Component } from 'react'
import '../Cadastro2/cadastro2.css'
import axios from 'axios'

export default class CadastroPrestador extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            nomeUsuario: '',
            rg: '',
            cpf: '',
            profissao: '',
            email: '',
            confEmail: '',
            apelido: '',
            senha: '',
            confSenha: '',
            estado: '',
            cidade: '',
            rua: '',
            numero: '',
            celular: '',
            telefone: '',
            check: false
         }
    }

    cadastrar() {
        const url = 'http://localhost:8080'
        const user = {
            nome: this.state.nomeUsuario,
            email: this.state.email,
            telefone: this.state.telefone,
            cidade: this.state.cidade,
            estado: this.state.estado,
            rua: this.state.rua,
            numero: this.state.numero,
            valor: this.state.valor,
            tipo_serviço: this.state.profissao,
            descricao: this.state.descricao,
            celular: this.state.celular,
            credenciais: {
                login: this.state.login,
                senha: this.state.senha
            }
        }

        axios.post(url, user).then(res => {
            console.log(res.data + " deu bom")
        }).catch(e => {
            console.log("deu ruim " + e)
        })
    }

    getUpdateList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }



    handleChange = (event) => {
        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value;

        this.setState(state);
    }

    isChecked = () => {
        this.setState(prevState => ({
            check: !prevState.check
        }))
    }



    render() {
        return (
            <div>
                <div className="div-titulo">
                    <h1 className="h1-cadastro">Cadastro De Prestador</h1>
                </div>
                <form action="">
                    <h2 className="h2" id="h2-info">Informações Pessoais</h2><br />
                    <label className="labelgran" id="label-nome">Nome Completo</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="nomeUsuario" id="nomeUsuario" className="inputgran" /><br />
                    <label className="labelpeq labelpri" id="label-rg">Rg</label>
                    <label className="labelpeq labelseg" id="label-cpf">Cpf</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="rg" id="rg" className="inputpeqpri inputpeq" />
                    <input onChange={e => this.handleChange(e)} type="texto" name="cpf" id="cpf" className="inputpeqseg inputpeq" /><br />
                    <label className="labelgran" id="label-profissao">Profissão</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="profissao" id="profissao" className="inputgran" /><br />
                    <h2 className="h2" id="h2-login">login</h2><br />
                    <label className="labelgran" id="label-email">Email</label><br />
                    <input onChange={e => this.handleChange(e)} type="email" name="email" id="email" className="inputgran" /><br />
                    <label className="labelgran" id="label-confEmail">Confirmar Email</label><br />
                    <input onChange={e => this.handleChange(e)} type="email" name="confEmail" id="confEmail" className="inputgran" /><br />
                    <label className="labelgran" id="label-apelido">Apelido</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="apelido" id="apelido" className="inputgran" /><br />
                    <label className="labelpeq labelpri" id="label-senha">Senha</label>
                    <label className="labelpeq labelseg" id="label-confSenha">Confirmar senha</label><br />
                    <input onChange={e => this.handleChange(e)} type="password" name="senha" id="senha" className="inputpeqpri inputpeq" />
                    <input onChange={e => this.handleChange(e)} type="password" name="confSenha" id="confSenha" className="inputpeqseg inputpeq" /><br />
                    <h2 className="h2" id="h2-endereco">Endereco</h2><br />
                    <label className="labelpeq labelpri" id="label-estado">Estado</label>
                    <label className="labelpeq labelseg" id="label-cidade">Cidade</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="estado" id="estado" className="inputpeqpri inputpeq" />
                    <input onChange={e => this.handleChange(e)} type="texto" name="cidade" id="cidade" className="inputpeqseg inputpeq" /><br />
                    <label className="labelpeq labelpri" id="label-rua">Rua</label>
                    <label className="labelpeq labelseg" id="label-numero">Numero</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="rua" id="rua" className="inputpeqpri inputpeq" />
                    <input onChange={e => this.handleChange(e)} type="texto" name="numero" id="numero" className="inputpeqseg inputpeq" /><br />
                    <h2 className="h2" id="h2-contato">Contato</h2><br />
                    <label className="labelpeq labelpri" id="label-celular">Celular</label>
                    <label className="labelpeq labelseg" id="label-telefone">Telefone</label><br />
                    <input onChange={e => this.handleChange(e)} type="texto" name="celular" id="celular" className="inputpeqpri inputpeq" />
                    <input onChange={e => this.handleChange(e)} type="texto" name="telefone" id="telefone" className="inputpeqseg inputpeq" /><br />
                    <div className="termo">
                        <input onChange={(e) => this.isChecked(e)} type="checkbox" id="check" /> <label htmlFor="check">Concordo com os termos de uso</label><br />
                    </div>
                    <button className="botaoCadastra" onClick={e => this.cadastrar(e)}>Cadastrar</button>
                </form>
            </div>
        )
    }
}