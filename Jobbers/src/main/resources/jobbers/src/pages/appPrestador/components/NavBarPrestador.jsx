import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";

export default class NavBarPrestador extends Component {
  render() {
    return (
      <aside className="menu-area">
        <div className="posi">
          <div className="lg">Logo</div>
          <nav className="menu">
            <a href="/homePrestador">
              <i className="fa fa-home"></i> Inicio
            </a>
            <a href="/homePrestador/perfilPrestador">
              <i className="fa fa-user"></i> Perfil
            </a>
            <i className="fa fa-sign-out" id="logout">Sair
            </i>
          </nav>
        </div>
      </aside>
    );
  }
}
