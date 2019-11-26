import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";
import axios from 'axios'
import { withRouter } from "react-router-dom";

class NavBar extends Component {

  componentDidMount() {
    const state = Object.assign({}, this.state);
    state.id = localStorage.getItem('id');
    this.setState(state);
  }

  logout = (param) => {
    let url = "http://localhost:8080/logout"
    axios.get(url).then(res => {
      this.props.history.push('/');
    }).catch(e => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <aside className="menu-area display-4">
        <div className="posi">
          <div className="lg">Logo</div>
          <nav className="menu">
            {/* <a href="/home" onClick={this.perfil}>
              <i className="fa fa-home"></i> Inicio
            </a>
            <a href="/home/pesquisa">
              <i className="fa fa-search"></i> Pesquisar
            </a>
            
            <a href="/home/perfil">
              <i className="fa fa-user"></i> Perfil
            </a>
            <i className="fa fa-sign-out" id="logout" onClick={() => this.logout(Login)}> Sair
            </i> */}
            <button onClick={() => this.props.change(0)} className="t">Home</button>
            <button onClick={() => this.props.change(1)} className="t">Pesquisar</button>
            <button onClick={() => this.props.change(2)} className="t">Perfil</button>
            <button onClick={() => this.logout()} className="t">Sair</button>
          </nav>
        </div>
      </aside>
    );
  }
}

export default withRouter(NavBar);