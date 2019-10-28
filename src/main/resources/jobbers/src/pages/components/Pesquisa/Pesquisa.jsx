import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Main from '../../Main/Main'
import '../../css/pesquisa.css'

export default props =>
    <Main icon="search" title="Pesquisa">
        <div className="p-3 mt-3 divPesquisa">
            <div className="display-4 divPosicion">
                <input type="text" className="inputPesquisa"></input><button className="pesquisar"><span className="fa fa-search"></span>Pesquisar</button>
            </div>
        </div>
    </Main>