import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/login.css'

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <img src="" id="icon" alt="User Icon" />
                            </div>
                            <form method="post">
                                <label className="fadeIn labels" id="label-usuario">Usuario</label><br />
                                <input type="text" name="login" id="usuario" className="fadeIn second" /><br />
                                <label className="fadeIn labels" id="label-senha">Senha</label><br />
                                <input type="password" id="password" className="fadeIn second" name="password"></input>
                                <input type="submit" className="fadeIn fourth" id="botao-login" value="Entrar"></input>
                            </form>
                            <p className="fadeIn cad">para se cadastrar click <a href="www.google.com">aqui</a></p>
                            <p className="fadeIn cad" id="cadastroPrestador">quer anunciar seus serviços <br /> cadastre-se clicando <a href="www.google.com">aqui</a></p>
                        </div>
                    </div>
            </Fragment>
        )
    }
}