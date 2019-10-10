import React, {Component} from 'react';

export default class PaginaPesquisa extends Component {
    render() {
        return (
            <header class="header">
                <input type="text" name="pesquisa" class="pesquisa" id="pesquisa"
                placeholder="Qual tipo profissional está procurando"></input>
                <button id="botaoUsuario">Usuario</button>
            </header>
        );
    }
}