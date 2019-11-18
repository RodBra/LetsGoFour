import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MainPrestador from '../../MainPrestador/MainPrestador'
import '../../css/home.css'

export default props =>
    <MainPrestador icon="home" title="Início">
        <div className="p-3 mt-3">
            <div className="display-4">
                <span>Bem Vindo!</span>
            </div>
            <hr/>
            <p>
                Olá, seja bem vindo a jobbers aqui você pode anunciar os seus serviços para
                que pessoas que estejam interessados em seu serviço possa entrar em contrato
                ou agendar para contratar os seus serviços
            </p>
        </div>

        <div className="p-3 mt-3">
            <div className="display-4">
                <span>Configurações Iniciais!</span>
            </div>
            <hr/>
            <p>
                Se está acessando pela primeira vez entre em seu <strong>Perfil </strong>
                e atualize algumas das informações que estam em branco
            </p>
        </div>
    </MainPrestador>