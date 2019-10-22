import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/home.css'
import Main from '../../Main/Main'

export default props =>
    <Main icon="home" title="Início">
        <div className="display-4">
            <span>Bem Vindo!</span>
        </div>
        <hr/>
        <p>
            Olá, você esta na jobbers aqui você consegue se divulgar para empresas e
            pessoas que necessitam de seu serviço
        </p>
    </Main>