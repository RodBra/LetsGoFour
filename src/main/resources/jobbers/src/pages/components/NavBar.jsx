import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar.css'


export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className="menu-area">
                    <div className="lg">
                        Logo
                    </div>
                    <nav className="menu">
                        <a href="/home">
                            <i className="fa fa-home"></i> Inicio
                        </a>
                        <a href="/search">
                            <i className="fa fa-search"></i> Pesquisar
                        </a>
                        <a href="/profile">
                            <i className="fa fa-user"></i> Perfil
                        </a>
                        {/* <a href="#/historic">
                            <i className="fa fa-history"></i> Historico
                        </a> */}
                        <a href="#/logout">
                            <i className="fa fa-sign-out"></i> Sair
                        </a>
                    </nav>
                </aside>
            </React.Fragment>
        );
    }
}