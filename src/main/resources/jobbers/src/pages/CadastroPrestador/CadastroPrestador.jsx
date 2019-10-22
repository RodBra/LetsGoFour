import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/cadastroPrestador.css'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

export default class CadastroPrestador extends Component {

    constructor(props){
        super(props);

        this.state ={
            name:'',
            rg:0,
            cpf:0,
            profissao:'',
            email:'',
            confirmaEmail:'',
            apelido:'',
            passwd:'',
            checkPasswd:'',
            estado:'',
            cidade:'',
            rua:'',
            numero:0,
            fone:'',
            cel:0,

            agree:false
        }
    }
    render() {
        return (
            <Fragment>

                <header>
                    <br /><br /> <h1>Cadastro Prestador</h1><br />
                </header>

                <body className="body">

                    <form className="form" >
                        <div className="form-row">

                            <div className="form-row">
                                <div className="form-group">
                                    <h2>Informações Pessoais</h2> <br /><br />

                                    <label className="label">Nome Completo</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="name" placeholder="  João Batista dos Santos"></input><br />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="label">RG</label><br />
                                        <input onChange={(e) => this.handleChange(e)} className="inputc" id="rg" placeholder="  12.345.678.9"></input><br />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label className="label">CPF</label><br />
                                        <input onChange={(e) => this.handleChange(e)} className="inputc" id="cpf" placeholder="  123.345.678.09"></input><br />
                                    </div>

                                </div>


                                <div className="form-group">
                                    <label className="label">Profissão</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="profissao" placeholder=" Pedreiro"></input><br />
                                </div>

                                <div className="form-group">
                                    <h2>Login</h2><br /><br />

                                    <label className="label">E-mail</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="email" placeholder="  joao.batista@gmail.com"></input><br />
                                </div>

                                <div className="form-group">
                                    <label className="label" >Confimar E-mail</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="confirmaEmail" placeholder="  joao.batista@gmail.com"></input><br />
                                </div>

                                <div className="form-group">
                                    <label className="label">Apelido</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="apelido" placeholder="  joaozinho007"></input><br /><br />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6 ">
                                    <label className="label" for="exampleInputEmail1">Senha</label>
                                    <input onChange={(e) => this.handleChange(e)}  type="password" className="form-control inputc" id="passwd" placeholder="*****************"></input>
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="label" for="exampleInputEmail1">Confirmar Senha</label>
                                    <input onChange={(e) => this.handleChange(e)}  type="password" className="form-control inputc" id="checkpasswd" placeholder="*****************"></input>
                                </div>

                            </div>
                        </div>


                        <h2>Endereço</h2><br /><br />
                        <div className="form-row">
                            <div className="form-row dados-endereco">
                                <div className="form-group col-md-6">

                                    <label className="label">Estado</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inputc" id="estado" placeholder="  São Paulo"></input><br />
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="label">Cidade</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inputc" id="cidade" placeholder="  São Paulo"></input><br />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="label">Rua</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inputc" id="rua" placeholder="  Rua dos bobos"></input><br />
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="label">Numero</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inputc" id="numero" placeholder="  000" />
                                </div>
                            </div>
                        </div>

                        <h2>Contato</h2><br /><br />
                        <div className="form-row">
                            <div className="form-row dados-endereco">
                                <div className="form-group col-md-6">

                                    <label className="label">Telefone</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inputc" id="fone" placeholder="  (DDD) 4002-8922"></input><br />
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="label">Celular</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inputc" id="cel" placeholder="  (DDD) 9 1234-5678"></input><br />
                                </div>
                            </div>
                        </div>

                        <div className="check">
                            <input onChange={(e) => this.isChecked(e)} id="agree" type="checkbox" ></input>
                            <label className="termos">Li e concordo com os termos de uso.</label>
                        </div>

                        <Link to="/login">
                        <div className="cadastro">
                            <input type="submit" id="cadastrar" value="Cadastrar" />
                        </div>
                        </Link>
                    </form>
                    <Footer />
                </body>

              

            </Fragment>
        )
    }
}