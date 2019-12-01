import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/perfil.css";

export default class Contratacao extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      botao: true,
      botaoEscrita: "Editar",
      user: {
        id: "",
        nome: "",
        cidade: "",
        estado: "",
        rua: "",
        numero: "",
        celular: "",
        telefone: "",
        email: "",
        tipo_servico: "",
        descricao: "",
        valor: "",
        profissao: "",
        credenciais: {
          login: "",
          senha: ""
        },
        prestador: true,
        inp: ''
      }
    };
  }

  escritaBotao() {
    const state = Object.assign({}, this.state);
    if (state.botao === true) {
      state.botaoEscrita = "Editar";
    } else {
      state.botaoEscrita = "Salvar";
    }
    this.setState(state);
  }

  agendar = () => {
    const state = Object.assign({}, this.state);
    state.inp = <input type="datetime-local" />
    this.setState(state);
  }

  render() {
    return (
      <React.Fragment>
        <div class="imagen mt-4 mb-4">
          <span className="fa fa-user"></span>
        </div>
        <span className="descricao" id="nomePrestador">
          Nome:
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputNomePrestador"
          id="inputNomePrestador"
        >
          {this.props.usuarioContratacao.nome}
        </span>
        <br />
        <span className="descricao" id="estadoPrestador">
          Estado:
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputEstadoPrestador"
          id="inputEstadoPrestador"
        >
          {this.props.usuarioContratacao.estado}
        </span>
        <br />
        <span className="descricao" id="cidadePrestador">
          Cidade:
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputCidadePrestador"
          id="inputCidadePrestador"
        >
          {this.props.usuarioContratacao.cidade}
        </span>
        <br />
        <span className="descricao" id="telefonePrestador">
          Telefone para Contato:
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputTelefonePrestador"
          id="inputTelefonePrestador"
        >
          {this.props.usuarioContratacao.celular}
        </span>
        <br />
        <span className="descricao" id="emailPrestador">
          Email:
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputEmailPrestador"
          id="inputEmailPrestador"
        >
          {this.props.usuarioContratacao.email}
        </span>
        <br />
        <span className="descricao" id="profissaoPrestador">
          Profissão:
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputProfissaoPrestador"
          id="inputProfissaoPrestador"
        >
          {this.props.usuarioContratacao.tipo_servico}
        </span>
        <br />
        <span className="descricao" id="valorServicoPrestador">
          Valor de serviço (diaria):
        </span>
        <span
          className=" inputSemBorda"
          type="texto"
          name="inputValorServicoPrestador"
          id="inputValorServicoPrestador"
        >
          {this.props.usuarioContratacao.valor}
        </span>
        <br />
        <textarea
          name="inputSemBorda"
          id="descricapoServico"
          rows="10"
          disabled="true"
          value={this.props.usuarioContratacao.descricao}
        >
        </textarea>
        <button className="buttonPrestador" id="denunciarButton">
          Denunciar
        </button>
        <button className="buttonPrestador" id="contratarButton" onClick={() => this.agendar()}>
          Agendar
        </button>
        {this.state.inp}

      </React.Fragment>
    );
  }
}
