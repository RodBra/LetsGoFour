import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar.css'


export default class NavBar extends Component {
    render() {
        return (
            <aside className="menu-area">
                <div className="posi">
                    <div className="lg">
                        Logo
                    </div>
                    <nav className="menu">
                        <a href="/home">
                            <i className="fa fa-home"></i> Inicio
                        </a>
                        <a href="/home/search">
                            <i className="fa fa-search"></i> Pesquisar
                        </a>
                        <a href="/home/profile">
                            <i className="fa fa-user"></i> Perfil
                        </a>
                        {/* <a href="#/historic">
                            <i className="fa fa-history"></i> Historico
                        </a> */}
                        <a href="/">
                            <i className="fa fa-sign-out"></i> Sair
                        </a>
                    </nav>
                </div>
            </aside>
        );
    }
}