import React, { Component, Fragment } from "react"

export default class Agendamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            idContratante: '',
            idPrestador: ''
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Informações para Contratação</h1>
                <form action="">
                    <label htmlFor="">data e hora</label><br/>
                    <input type="datatime-local" name="" id="" /><br/>
                    <button>Agendar</button>
                </form>
            </Fragment>
        )
    }
}