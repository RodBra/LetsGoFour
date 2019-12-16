import React, {Component} from 'react'
import axios from 'axios'

export default class Agendamento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userPrestador: {},
            userContratante: {}
        }
    }

    componentDidMount() {
        this.userPrestador()
    }

    userPrestador = async () => {
        const state = Object.assign({}, this.state);
        let url = "http://localhost:8080/userPrestador/"+this.props.idPrestador
        await axios.get(url).then(res => {
            state.userPrestador = res.data
            this.setState(state)
        }).catch(e => {
            console.log(e)
        });
    }

    render() {
        return(
            <tr>
                <td>{this.props.data}</td>
                <td>{this.state.userPrestador.nome}</td>
                <td>{this.state.userPrestador.celular}</td>
                <td>{this.state.userPrestador.email}</td>
                <td><button onClick={() => this.props.comentar()}>Comentar</button></td>
            </tr>
        )
    }
}