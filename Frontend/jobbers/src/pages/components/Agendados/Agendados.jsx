import React, { Component } from 'react'
import axios from 'axios'
import './agendados.css'


export default class Agendados extends Component {

    componentDidMount() {
        this.carregarAgendados()
    }

    carregarAgendados = () => {
        let idContratante = localStorage.getItem('id')
        let url = "http://localhost:8080/prestador/" + idContratante
        axios.get(url).then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(e)
        })
    }
    render() {
        return (
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
                    <tr>
                        <td>Jerry</td>
                        <td>Horwitz</td>
                        <td>Italy</td>
                        <td>Bari</td>
                        <td>Editor-in-chief</td>
                    </tr>
                    <tr>
                        <td>Janis</td>
                        <td>Joplin</td>
                        <td>Poland</td>
                        <td>Warsaw</td>
                        <td>Video Maker</td>
                    </tr>
                    <tr>
                        <td>Gary</td>
                        <td>Winogrand</td>
                        <td>Germany</td>
                        <td>Berlin</td>
                        <td>Photographer</td>
                    </tr>
                    <tr>
                        <td>Angie</td>
                        <td>Smith</td>
                        <td>USA</td>
                        <td>San Francisco</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Mattis</td>
                        <td>France</td>
                        <td>Paris</td>
                        <td>Actor</td>
                    </tr>
                    <tr>
                        <td>Otto</td>
                        <td>Morris</td>
                        <td>Germany</td>
                        <td>Munich</td>
                        <td>Singer</td>
                    </tr>
                </tbody>

            </table>
        )
    }
}