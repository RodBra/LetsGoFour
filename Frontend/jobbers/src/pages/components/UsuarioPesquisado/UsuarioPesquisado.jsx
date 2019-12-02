import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./pesquisado.css";
export default class UsuarioPesquisado extends React.Component {
  handleChangePage = page => {
    localStorage.setItem("ActualPage", page);
  };

  render() {
    return (
      <div className="mt-5 quadro">
        <div className="row display-4">
          <div className="col-1 display-4">
            <span className="fa fa-user mt-3 ml-4 userImage"></span>
          </div>
          <div className="col-5 display-4">
            <label className="labels ml-3 primeiro" id="labelNome">
              Nome:
            </label>
            <input
              className="inputVi"
              value={this.props.nome}
              name="nomePesquisado"
              id="nomePesquisado"
              type="texto"
              disabled={true}
            /><br />
            <label className="labels ml-3 primeiro">Profissão:</label>
            <input
              className="inputVi"
              value={this.props.servico}
              type="texto"
              name=""
              id="profissaoPesquisado"
              disabled={true}
            />
          </div>
          <div className="col display-4">
            <label className="labels">Estado:</label>
            <input className="inputVi" type="texto" name="" id="estadoPesquisado" disabled={true} value={this.props.estado}/>
            <br />
            <label className="labels">Cidade:</label>
            <input
              className="inputVi"
              type="texto"
              name=""
              disabled={true}
              id="cidadePesquisado"
              value={this.props.cidade}
            />
          </div>
          <div className="col-2 display-4">
            <button
              className="mt-5"  
              id="botaoVi"
              onClick={() => {
                this.props.change(3, this.props.id)
              }}
            >
              Visualizar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
