import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header d-none d-sm-flex flex-column">
                <h1 className="mt-3">
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.title}
                </h1>
                {/* <input type="text" name="pesquisa" class="pesquisa" id="pesquisa" placeholder="Qual tipo de profissional está procurando"></input>
                <button id="botaoUsuario">Usuario</button> */}
            </header>
        )
    }
}
