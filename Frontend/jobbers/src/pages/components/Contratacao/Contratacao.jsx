import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/perfil.css";
import axios from 'axios'
import Comentario from "./comentario/Comentario";

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
      },
      prestador: true,
      show: false,
      dataAgendamento: '',
      agendamentoConcluido: '',
      comentarios: [],
      comentarioAvaliativo: ''
    };
  }

  componentDidMount() {
    this.comentario()
  }

  handleChange = event => {
    console.log(event)
    const state = Object.assign({}, this.state);
    let field = event.target.id;
    state.user[field] = event.target.value;
    this.setState(state);
    console.log(this.state.dataAgendamento)
  };


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
    state.show = true
    this.setState(state);
  }

  cancelar = (e) => {
    e.preventDefault()
    const state = Object.assign({}, this.state);
    state.show = false
    this.setState(state);
  }

  comentario() {
    let url = "http://localhost:8080/avaliacao/prestador/"+ this.props.usuarioContratacao.idPrestador
    axios.get(url).then(res => {
      const state = Object.assign({}, this.state)
      console.log(res.data)
      for(let i = 0; i < res.data.length; i++) {
        state.comentarios.push(<Comentario comentario={res.data[i].comentario}
        login={res.data[i].login}/>)
      }
      if(res.data.length > 0) {
        state.comentarioAvaliativo = "Comentarios Avaliativo"
      }
      this.setState(state)
    }).catch(e => {
      console.log(e)
    })
  }

  agendado = (e) => {
    e.preventDefault();
    const state = Object.assign({}, this.state);
    let data = new Date(document.getElementById('dataAgendamento').value)
    let dataFormatada = ""+(data.getDate()+1)+"/"+(data.getMonth()+1)+"/"+data.getFullYear()+" "+ data.getHours() +":"+data.getUTCMinutes() +""
    let dados = {
      idPrestador: this.props.usuarioContratacao.id,
      idContratante: localStorage.getItem('id'),
      data: dataFormatada
    }
    let url = "http://localhost:8080/agendamento/agendar"
    axios.post(url, dados).then(res => {
      state.agendamentoConcluido = 'Agendamento concluido com sucesso'
      state.show = false;
      this.setState(state)
      console.log(res.data)
    }).catch(e => {
      console.log(e + " deu ruim")
    })
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
        {this.state.inp}
        <button className="buttonPrestador" id="denunciarButton">
          Denunciar
        </button>
        <button className="buttonPrestador" id="contratarButton" onClick={(e) => this.agendar(e)}>
          Contratar
        </button>
        <h2 className="comentarioAvaliativo">{this.state.comentarioAvaliativo}</h2>
        <div className="div-comentarios">
          {this.state.comentarios}
        </div>
        <div className={this.state.show ? "bg-modal" : "dn"}>
          <div className="modal-content">
            <h2 className="title-info">Agendar serviço</h2><br />
            <form action="">
              <label className="label-data">Data e hora do serviço</label>
              <input className="form-control" type="datetime-local" id="dataAgendamento" />
              <button className="button-agendamento" id="cancel" onClick={(e) => this.cancelar(e)}>Cancelar</button>
              <button className="button-agendamento" id="agend" onClick={(e) => this.agendado(e)}>Agendar</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
