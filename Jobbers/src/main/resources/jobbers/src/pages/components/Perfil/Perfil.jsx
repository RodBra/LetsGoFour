import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
// import Main from '../../Main/Main'

export default class Perfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dados: {

            }
        }
    }

    componentDidMount() {
        const state = Object.assign({}, this.state);
        state.dados = this.props.dados
        this.setState(state);
    }

    render() {
        return (
            <React.Fragment>
                <div class="imagen mt-4">
                    <span className="fa fa-user"></span>
                </div>
                <span className="descricao" id="nome">Nome:</span>
                <input type="texto" name="" id="" value={this.props.nome}></input><br />
                <span className="descricao" id="estado">Estado:</span>
                <input type="texto" name="" id="" value={this.props.estado}></input><br />
                <span className="descricao" id="cidade">Cidade:</span>
                <input type="texto" name="" id="" value={this.props.cidade}></input><br />
                <span className="descricao" id="rua">Rua:</span>
                <input type="texto" name="" id="" value={this.props.rua}></input><br />
                <span className="descricao" id="numero">Numero:</span>
                <input type="texto" name="" id="" value={this.props.numero}></input><br />
                <span className="descricao" id="telefone">Telefone:</span>
                <input type="texto" name="" id="" value={this.props.telefone}></input><br />
                <span className="descricao" id="email">Email:</span>
                <input type="texto" name="" id="" value={this.props.email}></input><br />
            </React.Fragment>
        )
    }
}