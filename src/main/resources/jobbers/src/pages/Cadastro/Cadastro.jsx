import React, { Component, Fragment } from 'react'
import '../css/cadastro.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Cadastro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            fone: '',
            email: '',
            confirmaEmail: '',
            apelido: '',
            passwd: '',
            checkPasswd: '',
            estado: '',
            cidade: '',
            rua: '',
            numero: 0,

            agree: false
        }
    }

    handleChange = (event) => {
        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value;

        this.setState(state);
    }

    isChecked = () => {
        this.setState(prevState => ({
            agree: !prevState.agree
        }))
    }

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
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="name" placeholder="  João Batista dos Santos"></input><br />
                                </div>

                                <div className="form-group">
                                    <label className="label">Telefone/Celular</label><br />
                                    <input onChange={(e) => this.handleChange(e)} className="inpu" id="fone" placeholder=" (DDD) 4002-8922"></input><br /><br />
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
                                    <label className="label">Senha</label>
                                    <input onChange={(e) => this.handleChange(e)} className="form-control inputc" id="passwd" placeholder="*****************"></input>
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="label">Confirmar Senha</label>
                                    <input onChange={(e) => this.handleChange(e)} className="form-control inputc" id="checkPasswd" placeholder="*****************"></input><br /><br />
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



                        <div className="check">
                            <input onChange={(e) => this.isChecked(e)} id="agree" type="checkbox" ></input>
                            <label className="termos">Li e concordo com os termos de uso.</label>
                        </div>


                        <div >
                            <input className="cadastro" type="submit" id="cadastro" value="Cadastrar" />
                        </div>
                    </form>
                </body>


            </Fragment>
        )
    }
}