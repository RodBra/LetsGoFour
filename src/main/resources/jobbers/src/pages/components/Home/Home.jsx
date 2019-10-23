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
            Olá, você está na jobbers aqui você consegue se divulgar para empresas e
            pessoas que necessitam dos seus serviços, além de você mesmo poder solicitar 
            serviços de varios dos nossos usuarios que querem prestar seus serviços
        </p>
    </Main>