import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/navbar.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class NavBarPrestador extends Component {

  logout = () => {
    let url = "http://localhost:8080/logout"
    axios.get(url).then(res => {
      window.location.href = "/"
    }).catch(e => {
      console.log(e)
    })
  }
  render() {
    return (
      <aside className="menu-area">
        {/* <div className="posi"> */}
          <nav className="menu">
          <div className="lg mt-3 ml-4">Jobbers</div>
            <button onClick={() => this.props.change(0)} className="t"><i className="fa fa-home"></i> Home</button>
            <button onClick={() => this.props.change(2)} className="t"><i className="fa fa-history"></i> Agendados</button>
            <button onClick={() => this.props.change(1)} className="t"><i className="fa fa-user"></i> Perfil</button>
            <button onClick={() => this.logout()} className="t"><i className="fa fa-sign-out"></i> Sair</button>
          </nav>
        {/* </div> */}
      </aside>
    );
  }
}

export default withRouter(NavBarPrestador);