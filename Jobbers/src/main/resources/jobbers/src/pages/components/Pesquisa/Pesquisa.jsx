import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/pesquisa.css'
// import UsuarioPesquisado from '../UsuarioPesquisado/UsuarioPesquisado'
import axios from 'axios'
import UsuarioPesquisado from '../UsuarioPesquisado/UsuarioPesquisado';
export default class Pesquisa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            servico: "",
            prestadores: []
        }
    }

    handleChange = (event) => {
        let state = Object.assign({}, this.state)
        let field = event.target.id;
        state[field] = event.target.value;
        this.setState(state)
    }

    pesquisar = (e) => {
        // e.preventDefault()
        let url = "http://localhost:8080/prestador/servico/" + this.state.servico
        axios.get(url).then(res => {
            let state = Object.assign({}, this.state)
            state.prestadores = res.data
            this.setState(state)
        }).catch(e => {
            console.log(e)
        })
    }

    teste = () => {
        let state = Object.assign({}, this.state)
        for (let i =0; i< 2; i++) {
            state.prestadores.push(<UsuarioPesquisado/>)
        }
        this.setState(state)
        // return <UsuarioPesquisado/>
    }

    render() {
        return (
            <React.Fragment>
                <div className="p-3 mt-3 divPesquisa display-4">
                    <div className="display-4 divPosicion">
                        <form>
                            <input type="texto" className="inputPesquisa" id="servico" onChange={(e) => this.handleChange(e)}></input>
                            <button className="pesquisar" onClick={() => this.pesquisar()}>
                                <span>Pesquisar</span>
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.prestadores}
            </React.Fragment>
        )
    }
}