import React, { Component } from 'react'
import '../../../css/perfil.css'

export default class Comentario extends Component {
    render() {
        return (
            <div className="div-comentario">
                <label className="nomeLogin">{this.props.login}:</label><br/>
                <p>
                    {this.props.comentario}
                </p>
            </div>
        )
    }
}