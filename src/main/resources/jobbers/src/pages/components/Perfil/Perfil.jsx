import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import Main from '../../Main/Main'

export default props =>
    <Main icon="user" title="Perfil">
        <div class="imagen">
            <span className="fa fa-user"></span>
        </div>
        <div class="descricao">
            <div>
                <p>Nome:</p>
                <p>Estado:</p>
                <p>Cidade:</p>
                <p>Rua:</p>
                <p>Numero:</p>
                <p>Complemento:</p>
                <p>Telefone:</p>
                <p>Email:</p>
            </div>
        </div>
    </Main>