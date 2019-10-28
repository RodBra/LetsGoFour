import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import Main from '../../Main/Main'

export default props =>
    <Main icon="user" title="Perfil">

        
            <div class="imagen mt-4">
                <span className="fa fa-user"></span>
            </div>

        <div class="descricao">
            <div>
                <span>Nome:</span>candjocna<br/>
                <span>Estado:</span><br/>
                <span>Cidade:</span><br/>
                <span>Rua:</span><br/>
                <span>Numero:</span><br/>
                <span>Complemento:</span><br/>
                <span>Telefone:</span><br/>
                <span>Email:</span>
            </div>
        </div>
    </Main>