import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/login.css";
import { withRouter } from "react-router-dom";

import axios from "axios";

let url = "http://localhost:8080";

class Login extends Component {
  state = {
    usuario: "",
    password: "",
    Erro: ""
  };

  handleChange = event => {
    const state = Object.assign({}, this.state);
    let field = event.target.id;
    state[field] = event.target.value;
    this.setState(state);
  };

  login1 = (e) => {
    e.preventDefault();
    let login = this.state.usuario;
    let senha = this.state.password;
    const state = Object.assign({}, this.state);

    let dados = {
      login: login,
      senha: senha
    };

    localStorage.setItem('login', dados.login)
    localStorage.setItem('senha', dados.senha)
    
        console.log("localStorage: "+ localStorage.getItem('login'))

    axios
      .post(url + "/login", dados)
      .then(res => {
        localStorage.setItem('user', res.data)
        console.log("res: "+res.data)
        console.log("localStorage: "+localStorage)
        if (res.data.prestador === true) {
          this.props.history.push("/homePrestador");
          console.log(res)
        } else if (res.data.prestador === false) {
          this.props.history.push("/home");
          console.log(res)
        }
      })
      .catch(e => {
        this.props.history.push("/");
        console.log("deu ruim " + e);
        state.Erro = "Usuário ou senha inválido"
        this.setState(state);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
            </div>
            <form onSubmit={e => this.login1(e)}> 
              <label className="fadeIn labels" id="label-usuario">
                Usuario
              </label>
              <br />
              <input
                type="text"
                name="login"
                id="usuario"
                className="fadeIn second"
                onChange={event => this.handleChange(event)}
              />
              <br />
              <label className="fadeIn labels" id="label-senha">
                Senha
              </label>
              <br />
              <input
                type="password"
                id="password"
                className="fadeIn second"
                name="password"
                onChange={event => this.handleChange(event)}
              ></input>
              <button
                className="fadeIn fourth"
                id="botao-login"
                // onClick={this.login1}
              >
                Entrar
              </button>
            </form>
            <p id="msgErro">
                {this.state.Erro}
            </p>
            <p className="fadeIn cad">
              para se cadastrar click <a href="/register">aqui</a>
            </p>
            <p className="fadeIn cad" id="cadastroPrestador">
              quer anunciar seus serviços <br /> cadastre-se clicando{" "}
              <a href="/registerPrestador">aqui</a>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Login);
