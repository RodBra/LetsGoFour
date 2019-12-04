import React, {Component} from 'react'
import axios from 'axios'

export default class AgendamentoPrestador extends Component {

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

    userPrestador = () => {
        const state = Object.assign({}, this.state);
        let url = "http://localhost:8080/user/"+this.props.idContratante
        axios.get(url).then(res => {
            state.userContratante = res.data
            this.setState(state)
        }).catch(e => {
            console.log(e)
        });
    }

    render() {
        return(
            <tr>
                <td>{this.props.data}</td>
                <td>{this.state.userContratante.nome}</td>
                <td>{this.state.userContratante.telefone}</td>
                <td>{this.state.userContratante.email}</td>
            </tr>
        )
    }
}