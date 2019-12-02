import React, { Component } from 'react'
import './agendadosPrestador.css'


export default class Agendados extends Component {
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
                        <th>Concluir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jerry</td>
                        <td>Horwitz</td>
                        <td>Italy</td>
                        <td>Bari</td>
                        <td>Editor-in-chief</td>
                        <td>
                            <button>
                                Cocluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Janis</td>
                        <td>Joplin</td>
                        <td>Poland</td>
                        <td>Warsaw</td>
                        <td>Video Maker</td>
                        <td>
                            <button>
                                Cocluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Gary</td>
                        <td>Winogrand</td>
                        <td>Germany</td>
                        <td>Berlin</td>
                        <td>Photographer</td>
                        <td>
                            <button>
                                Cocluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Angie</td>
                        <td>Smith</td>
                        <td>USA</td>
                        <td>San Francisco</td>
                        <td>Teacher</td>
                        <td>
                            <button>
                                Cocluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Mattis</td>
                        <td>France</td>
                        <td>Paris</td>
                        <td>Actor</td>
                        <td>
                            <button>
                                Cocluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Otto</td>
                        <td>Morris</td>
                        <td>Germany</td>
                        <td>Munich</td>
                        <td>Singer</td>
                        <td>
                            <button>
                                Cocluir
                            </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        )
    }
}