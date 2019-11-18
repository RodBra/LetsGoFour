import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Main from '../../Main/Main'
import '../../css/pesquisa.css'
import UsuarioPesquisado from '../UsuarioPesquisado/UsuarioPesquisado'
import axios from 'axios'

const pesquisa = {
    servico: ""
}

let url = "http://localhost:8080"

let handleChange =  (event) => {
    let field = event.target.id;

    pesquisa[field] = event.target.value;

}

let pesquisar = () => {
    let urlPesquisa = url+"/prestador/servico/"+pesquisa.servico
    axios.get(urlPesquisa).then(res => {
        console.log(res)
    }).catch(e => {
        console.log("deu ruim "+ e)
    })
}

export default props =>
    <Main icon="search" title="Pesquisa">
        <div className="p-3 mt-3 divPesquisa display-4">
            <div className="display-4 divPosicion">
                <form action="">
                    <input type="texto" className="inputPesquisa" id="servico" onChange={(e) => handleChange(e)}></input>
                    <button className="pesquisar" onClick={() => pesquisar()}>
                        <span className="fa fa-search">
                            <span>Pesquisar</span>
                        </span>
                    </button>
                </form>
            </div>
        </div>
        <UsuarioPesquisado/>
    </Main>