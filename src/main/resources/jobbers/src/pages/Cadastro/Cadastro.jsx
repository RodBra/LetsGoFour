import React, { Component, Fragment } from 'react'
import '../css/cadastro.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Cadastro extends Component {
    render() {
        return (
            <Fragment>

                <header>
                    <br /><br /> <h1>Cadastro</h1><br />

                </header>

                <body className="body">

                    <form className="form">
                        <div className="form-row">

                            <div className="form-row">
                                <div className="form-group">
                                    <h2>Informações Pessoais</h2> <br /><br />

                                    <label className="label">Nome Completo</label><br />
                                    <input className="inpu" id="name" placeholder="  João Batista dos Santos"></input><br />
                                </div>

                                <div className="form-group">
                                    <label className="label">Telefone/Celular</label><br />
                                    <input className="inpu" id="fone" placeholder=" Pedreiro"></input><br />
                                </div>

                                <div className="form-group">
                                    <h2>Login</h2><br /><br />

                                    <label className="label">E-mail</label><br />
                                    <input className="inpu" id="email" placeholder="  joao.batista@gmail.com"></input><br />
                                </div>

                                <div className="form-group">
                                    <label className="label" >Confimar E-mail</label><br />
                                    <input className="inpu" id="confirmaEmail" placeholder="  joao.batista@gmail.com"></input><br />
                                </div>

                                <div className="form-group">
                                    <label className="label">Apelido</label><br />
                                    <input className="inpu" id="apelido" placeholder="  joaozinho007"></input><br /><br />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6 ">
                                    <label className="label" for="exampleInputEmail1">Senha</label>
                                    <input className="form-control inputc" placeholder="*****************"></input>
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="label" for="exampleInputEmail1">Confirmar Senha</label>
                                    <input className="form-control inputc" placeholder="*****************"></input>
                                </div>

                            </div>
                        </div>


                        <h2>Endereço</h2><br /><br />
                        <div className="form-row">
                            <div className="form-row dados-endereco">
                                <div className="form-group col-md-6">

                                    <label className="label">Estado</label><br />
                                    <input className="inputc" id="estado" placeholder="  São Paulo"></input><br />
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="label">Cidade</label><br />
                                    <input className="inputc" id="cidade" placeholder="  São Paulo"></input><br />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="label">Rua</label><br />
                                    <input className="inputc" id="rua" placeholder="  Rua dos bobos"></input><br />
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="label">Numero</label><br />
                                    <input className="inputc" id="numero" placeholder="  000" />
                                </div>
                            </div>
                        </div>



                        <div className="check">
                            <input id="agree" type="checkbox" ></input>
                            <label className="termos">Li e concordo com os termos de uso.</label>
                        </div>


                        <div className="cadastro">
                            <input type="submit" value="Cadastrar" />

                        </div>
                    </form>
                </body>


            </Fragment>
        )
    }
}