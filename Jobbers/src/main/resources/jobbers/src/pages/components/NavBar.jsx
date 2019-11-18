import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";
import axios from 'axios'
import { withRouter, Redirect } from "react-router-dom";
import Login from "../Login/Login";

class NavBar extends Component {

  logout = (param) => {
    let url = "http://localhost:8080/logout"
    axios.get(url).then(res => {
      withRouter(param);
    }).catch(e => {
      // this.props.history.push('/');
    })
  }

  renderRedirect = () => {
      return <Redirect to='/' />
  }

  perfil = (e) => {
    e.preventDefault();
    // axios.get
  }

  render() {
    return (
      <aside className="menu-area display-4">
        <div className="posi">
          <div className="lg">Logo</div>
          <nav className="menu">
            <a href="/home">
              <i className="fa fa-home"></i> Inicio
            </a>
            <a href="/home/pesquisa">
              <i className="fa fa-search"></i> Pesquisar
            </a>
              <i className="fa fa-user" id="perfil" onClick={e => this.perfil(e)}> Perfil</i><br/>
            <i className="fa fa-sign-out" id="logout" onClick={() => this.logout(Login)}> Sair
            </i>
          </nav>
        </div>
      </aside>
    );
  }
}

export default withRouter(NavBar);