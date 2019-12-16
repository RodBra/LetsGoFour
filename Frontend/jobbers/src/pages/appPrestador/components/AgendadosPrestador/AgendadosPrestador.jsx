import React, { Component } from 'react'
import './agendadosPrestador.css'
import axios from 'axios'
import AgendamentoPrestador from './AgendamentoPrestador'
export default class agendadosPrestador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agendados: [],
            userContratante: {},
            agendamentos: [],
        }
    }

    componentDidMount() {
        this.carregarAgendados()
    }

    carregarAgendados = () => {
        let idPrestador = localStorage.getItem('id')
        let url = "http://localhost:8080/agendamentos/prestador/" + idPrestador
        axios.get(url).then(res => {
            const state = Object.assign({}, this.state);
            console.log(res.data)
            state.agendados = res.data
            this.setState(state)
            this.renderAgendamentos(state.agendados)             
        }).catch(e => {
            console.log(e)
        })
    }

    renderAgendamentos = () => {
        const state = Object.assign({}, this.state);

        for (let i = 0; i < state.agendados.length; i++) {
            state.agendamentos.push(
              <AgendamentoPrestador 
              data={state.agendados[i].data}
              idContratante={state.agendados[i].idContratante}
              comentar={this.comentar}
              />
            );
        }
        this.setState(state)
    }

    render() {
        return (
            <table class="table table-hover table-fixed">
                <thead>
                    <tr>
                        <th>Data/hora</th>
                        <th>Contratante</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Concluir</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.agendamentos}
                </tbody>

            </table>
        )
    }
}