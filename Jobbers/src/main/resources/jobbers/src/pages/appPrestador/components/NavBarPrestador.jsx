import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class NavBarPrestador extends Component {

  logout = () => {
    let url = "http://localhost:8080/logout"
    axios.get(url).then(res => {
      this.props.history.push('/');
    }).catch(e => {
      this.props.history.push('/');
    })
  }
  render() {
    return (
      <aside className="menu-area">
        <div className="posi">
          <div className="lg">Logo</div>
          <nav className="menu">
            {/* <a href="/homePrestador">
              <i className="fa fa-home"></i> Inicio
            </a>
            <a href="/homePrestador/perfilPrestador">
              <i className="fa fa-user"></i> Perfil
            </a>
            <i className="fa fa-sign-out" id="logout" onClick={() => this.logout()}>Sair
            </i> */}
            <button onClick={() => this.props.change(0)} className="t">Home</button>
            <button onClick={() => this.props.change(1)} className="t">Perfil</button>
            <button onClick={() => this.logout()} className="t">Sair</button>
          </nav>
        </div>
      </aside>
    );
  }
}

export default withRouter(NavBarPrestador);