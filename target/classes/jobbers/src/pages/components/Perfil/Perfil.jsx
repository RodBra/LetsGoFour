import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import Main from '../../Main/Main'

export default props =>
    <Main icon="user" title="Perfil">
        <div class="imagen mt-4">
            <span className="fa fa-user"></span>
        </div>
        <span className="descricao" id="nome">Nome:</span><br/>
        <span className="descricao" id="estado">Estado:</span><br/>
        <span className="descricao" id="cidade">Cidade:</span><br/>
        <span className="descricao" id="rua">Rua:</span><br/>
        <span className="descricao" id="numero">Numero:</span><br/>
        <span className="descricao" id="complemento">Complemento:</span><br/>
        <span className="descricao" id="telefone">Telefone:</span><br/>
        <span className="descricao" id="email">Email:</span><br/>
    </Main>