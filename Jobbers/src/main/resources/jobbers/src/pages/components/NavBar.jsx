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
      window.location.href = "/"
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <aside className="menu-area display-4">
        <div className="posi">
          <div className="lg">Logo</div>
          <nav className="menu">
            <button onClick={() => this.props.change(0)} className="t"><i className="fa fa-home"></i> Home</button>
            <button onClick={() => this.props.change(1)} className="t"><i className="fa fa-search"></i> Pesquisar</button>
            <button onClick={() => this.props.change(2)} className="t"><i className="fa fa-user"></i> Perfil</button>
            <button onClick={() => this.logout()} className="t"><i className="fa fa-sign-out"></i> Sair</button>
          </nav>
        </div>
      </aside>
    );
  }
}

export default withRouter(NavBar);