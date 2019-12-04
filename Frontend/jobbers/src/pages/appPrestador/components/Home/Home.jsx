import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/home.css'

export default props =>
    <React.Fragment>
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
                <span>Proximos Passos</span>
            </div>
            <hr/>
            <p>
                Se está acessando pela primeira vez entre em seu <strong>Perfil </strong>
                e atualize algumas das informações que estam em branco, para que os contratantes
                tenham mais informações sobre você, e pronto agora é só esperar que agendem uma 
                data e hora e entrem em contato com você para explicar sobre o serviço.
            </p>
            <p>
                Para que voce veja os dados do seu agendamento é só clicar no menu em 
                <strong>Agendados</strong> e conferir os dados
            </p>
        </div>
    </React.Fragment>