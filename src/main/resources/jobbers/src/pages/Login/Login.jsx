import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/login.css'

import axios from 'axios'

let url = "http://localhost:8080"

export default class Login extends Component {

    state = {
        user: {
            usuario: '',
            password: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.id);
        
        const user = Object.assign({}, this.state.user);
        let  field = event.target.id;

        user[field] = event.target.value;

        this.setState(user);
    }

    logar = () => {
        let login = this.state.user.usuario
        let senha = this.state.user.password 

        let dados = {
            credenciais: {
                login: login,
                senha: senha
            }
        }

        axios.get(url+"/login", dados).then(res => {
            console.log(res);
            this.props.history.push('/home');
        }).catch(e => {
            console.log("deu ruim " + e)
        })
    }

    render() {
        return (
            <Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src="" id="icon" alt="User Icon" />
                        </div>
                        <form onSubmit={() => this.login()}>
                            <label className="fadeIn labels" id="label-usuario">Usuario</label><br/>
                            <input type="text" name="login" id="usuario" className="fadeIn second" onChange={(event) => this.handleChange(event)}/><br/>
                            <label className="fadeIn labels" id="label-senha">Senha</label><br/>
                            <input type="password" id="password" className="fadeIn second" name="password" onChange={(event) => this.handleChange(event)}></input>
                            <input type="submit" className="fadeIn fourth" id="botao-login" value="Entrar"></input>
                        </form>
                        <p className="fadeIn cad">para se cadastrar click <a href="/register">aqui</a></p>
                        <p className="fadeIn cad" id="cadastroPrestador">quer anunciar seus serviços <br/> cadastre-se clicando <a href="/registerPrestador">aqui</a></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}