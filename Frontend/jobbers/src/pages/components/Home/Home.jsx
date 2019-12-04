import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import Main from '../../Main/Main'
import '../../css/home.css'

export default props =>
    <Fragment>
        <div className="p-3 mt-3">
            <div className="display-4">
                <span>Bem Vindo!</span>
            </div>
            <hr/>
            <p>
                Olá, você está na jobbers aqui você consegue se divulgar para empresas e
                pessoas que necessitam dos seus serviços, além de você mesmo poder solicitar 
                serviços de varios dos nossos usuarios que querem prestar seus serviços
            </p>
        </div>

                <div className="p-3 mt-3">
            <div className="display-4">
                <span>Etapas Para Contratar</span>
            </div>
            <hr/>
            <p>
                Para agendar e contratar um de nossos Prestadores é muito simples você deverá
                clicar no menu em <strong>Pesquisar</strong>, fazer uma busca pela profissão
                e assim ira aparecer nossos profissionais para que você possa avaliar quem será uma 
                melhor opção para seu serviço e assim contrata-lo agendando data e hora
            </p>
        </div>
    </Fragment>