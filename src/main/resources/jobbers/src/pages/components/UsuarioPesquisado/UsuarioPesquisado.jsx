import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import '../../css/pesquisa.css'
import './pesquisado.css'

export default class UsuarioPesquisado extends React.Component {
    render() {
        return (
            <div className="mt-5 quadro">
                <div className="display-4">
                    <table>
                        <tbody>
                            <tr>
                                <td id="fotoLocal">
                                    <div id="foto">
                                        <span className="fa fa-user ml-5 mt-5"></span>
                                    </div>
                                </td>
                                <td id="informacao">
                                    <label className="labels ml-3 primeiro">Nome:</label>
                                    <input className="inputVi" type="texto" name="nome" id="nome"/>
                                    <label className="labels">Estado:</label>
                                    <input className="inputVi" type="texto" name="" id=""/><br/>
                                    <label className="labels ml-3 primeiro">Profissão:</label>
                                    <input className="inputVi" type="texto" name="" id=""/>
                                    <label className="labels">Cidade</label>
                                    <input className="inputVi" type="texto" name="" id=""/>
                                </td>
                                <td id="botaoVi">
                                    <button id="botaoVi">Visualizar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}