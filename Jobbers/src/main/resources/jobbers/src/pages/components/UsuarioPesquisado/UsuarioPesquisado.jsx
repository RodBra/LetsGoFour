import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './pesquisado.css'
export default class UsuarioPesquisado extends React.Component {

    handleChangePage = (page) => {
        localStorage.setItem("ActualPage", page)
    }

    render() {
        return (
            <div className="mt-5 quadro">
                <div className="display-4">
                    <span className="fa fa-user mt-8 userImage"></span>
                    <label className="labels ml-3 mt-1 primeiro" id="labelNome">Nome:</label>
                    <input className="inputVi" type="texto" name="nomePesquisado" id="nomePesquisado" />
                    <label className="labels">Estado:</label>
                    <input className="inputVi" type="texto" name="" id="" /><br />
                    <label className="labels ml-3 primeiro">Profissão:</label>
                    <input className="inputVi" type="texto" name="" id="" />
                    {/* <label className="labels">Cidade</label>
                    <input className="inputVi" type="texto" name="" id="" /> */}

                    {/* <button id="botaoVi" onClick={() => { this.props.change(3, this.props.id) }}>Visualizar</button> */}
                </div>
            </div>
        )
    }
}