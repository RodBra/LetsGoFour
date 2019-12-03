import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './agendados.css'
import Agendamento from './Agendamento';


export default class Agendados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agendados: [],
            userPrestador: {},
            agendamentos: [],
            show: false
        }
    }

    componentDidMount() {
        this.carregarAgendados();
        this.renderAgendamentos()
    }

    carregarAgendados = () => {
        let idContratante = localStorage.getItem('id')
        let url = "http://localhost:8080/agendamentos/contratante/" + idContratante
        axios.get(url).then(res => {
            const state = Object.assign({}, this.state);
            state.agendados = res.data
            this.setState(state)
            this.renderAgendamentos(state.agendados)
            console.log(this.state.agendados)
             
        }).catch(e => {
            console.log(e)
        })
    }

    renderAgendamentos = (agendados) => {
        const state = Object.assign({}, this.state);
        console.log(agendados.length)
        for (let i = 0; i < agendados.length; i++) {
            state.agendamentos.push(
              <Agendamento 
              data={state.agendados[i].data}
              idPrestador={state.agendados[i].idPrestador}
              comentar={this.comentar}
              />
            );
        }
    }

    comentado = (e) => {
        e.preventDefault();
        const state = Object.assign({}, this.state);
        let dados = {
            comentario: document.getElementById('comentario').value,
            idPrestador: state.userPrestador.id,
            login: localStorage.getItem('login')
        }
        let url = "http://localhost:8080/agendamento/agendar"
        axios.post(url, dados).then(res => {
          console.log(res.data)
          state.show = false;
          this.setState(state)
        }).catch(e => {
          console.log(e + " deu ruim")
          state.show = false;
          this.setState(state)
        })
      }

    comentar = () => {
        const state = Object.assign({}, this.state);
        state.show = true
        this.setState(state);
    }

    render() {
        return (
            <Fragment>
                <table class="table table-hover table-fixed">
                    <thead>
                        <tr>
                            <th>Data/hora</th>
                            <th>Prestador</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th>Concluido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.agendamentos}
                    </tbody>
                </table>
                <div className={this.state.show ? "bg-modal-comentario" : "dn"}>
                  <div className="modal-content-comentario">
                    <h2 className="title-coment">Comentar serviço</h2><br />
                    <form action="">
                      <label className="label-coment">Comente sobre o serviço para outros usuários:</label><br/>
                      <textarea className="comentario" id="comentario"></textarea><br/>
                      <button className="button-comment" id="coment" onClick={(e) => this.comentado(e)}>Salvar</button>
                    </form>
                  </div>
                </div>
            </Fragment>
        )
    }
}