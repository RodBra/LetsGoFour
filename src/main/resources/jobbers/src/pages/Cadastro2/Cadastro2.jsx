import React, { Component } from 'react'
import './cadastro2.css'

export default class Cadastro2 extends Component {
    render() {
        return (
                <div>
                    <div className="div-titulo">
                        <h1 className="h1-cadastro">Cadastro</h1>
                    </div>
                    <form action="">
                        <h2 className="h2" id="h2-info">Informações Pessoais</h2><br/>
                        <label className="labelgran" id="label-nome">Nome Completo</label><br/>
                        <input type="texto" name="nome" id="nome" className="inputgran"/><br/>
                        <label className="labelgran" id="label-telefone1">Telefone/Celular</label><br/>
                        <input type="texto" name="telefone" id="telefone" className="inputgran"/><br/>
                        <h2 className="h2" id="h2-login">login</h2><br/>
                        <label className="labelgran" id="label-email">Email</label><br/>
                        <input type="email" name="email" id="email" className="inputgran"/><br/>
                        <label className="labelgran" id="label-confEmail">Confirmar Email</label><br/>
                        <input type="email" name="confEmail" id="confEmail" className="inputgran"/><br/>
                        <label className="labelgran" id="label-apelido">Apelido</label><br/>
                        <input type="password" name="apelido" id="apelido" className="inputgran"/><br/>
                        <label className="labelpeq labelpri" id="label-senha">Senha</label>
                        <label className="labelpeq labelseg" id="label-confSenha">Confirmar senha</label><br/>
                        <input type="password" name="senha" id="senha" className="inputpeqpri inputpeq"/>
                        <input type="password" name="confSenha" id="confSenha" className="inputpeqseg inputpeq"/><br/>
                        <h2 className="h2" id="h2-endereco">Endereco</h2><br/>
                        <label className="labelpeq labelpri" id="label-estado">Estado</label>
                        <label className="labelpeq labelseg" id="label-cidade">Cidade</label><br/>
                        <input type="texto" name="estado" id="estado" className="inputpeqpri inputpeq"/>
                        <input type="texto" name="cidade" id="cidade" className="inputpeqseg inputpeq"/><br/>
                        <label className="labelpeq labelpri" id="label-rua">Rua</label>
                        <label className="labelpeq labelseg" id="label-numero">Numero</label><br/>
                        <input type="texto" name="rua" id="rua" className="inputpeqpri inputpeq"/>
                        <input type="texto" name="numero" id="numero" className="inputpeqseg inputpeq"/><br/>
                        <div className="termo">
                            <input type="checkbox" id="check"/> <label htmlFor="check">Concordo com os termos de uso</label><br/>
                        </div>  
                        <button className="botaoCadastra">Cadastrar</button>
                    </form>
                </div>
        )
    }
}