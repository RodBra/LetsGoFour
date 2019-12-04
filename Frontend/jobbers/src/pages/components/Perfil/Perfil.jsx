import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/perfil.css'
import axios from 'axios'

let url = "http://localhost:8080"
export default class Perfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            botao: true,
            atualizado: "",
            user: {
                id: "",
                estado: "",
                cidade: "",
                rua: "",
                numero: "",
                telefone: "",
                email: "",
                credenciais: {
                    login: "",
                    senha: ""
                },
                prestador: false
            }
        }
    }

    componentDidMount() {
        const state = Object.assign({}, this.state);
        state.user.id = localStorage.getItem('id')
        state.user.nome = localStorage.getItem('nome')
        state.user.cidade = localStorage.getItem('cidade')
        state.user.estado = localStorage.getItem('estado')
        state.user.rua = localStorage.getItem('rua')
        state.user.numero = localStorage.getItem('numero')
        state.user.telefone = localStorage.getItem('telefone')
        state.user.email = localStorage.getItem('email')
        state.user.credenciais.login = localStorage.getItem('login')
        state.user.credenciais.senha = localStorage.getItem('senha')
        this.setState(state);
    }

    handleChange = event => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state.user[field] = event.target.value;
        this.setState(state);
        console.log(state.user.nome)
    };

    habilitaDesabilita = e => {
        const state = Object.assign({}, this.state);
        state.botao = !state.botao;
        this.setState(state)
        if(e.target.id === "salvar") {
            let user = this.state.user
            axios.put(url+"/update", user).then(res => {
                const state = Object.assign({}, this.state);
                state.atualizado = "Atualizado com sucesso";
                this.setState(state);
                this.props.usuario()
            }).catch(e => {
                console.log("deu ruim")
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div class="imagen mt-4">
                    <span className="fa fa-user"></span>
                </div>
                <span className="descricao" id="nomeUserUser">Nome:</span>
                <input className="inputPerfilContratante" type="texto" name="nome" id="nome" value={this.state.user.nome} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <span className="descricao" id="estadoUser">Estado:</span>
                <input className="inputPerfilContratante" type="texto" name="estado" id="estado" value={this.state.user.estado} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <span className="descricao" id="cidadeUser">Cidade:</span>
                <input className="inputPerfilContratante" type="texto" name="cidade" id="cidade" value={this.state.user.cidade} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <span className="descricao" id="ruaUser">Rua:</span>
                <input className="inputPerfilContratante" type="texto" name="rua" id="rua" value={this.state.user.rua} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <span className="descricao" id="numeroUser">Numero:</span>
                <input className="inputPerfilContratante" type="texto" name="numero" id="numero" value={this.state.user.numero} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <span className="descricao" id="telefoneUser">Telefone:</span>
                <input className="inputPerfilContratante" type="texto" name="telefone" id="telefone" value={this.state.user.telefone} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <span className="descricao" id="emailUser">Email:</span>
                <input className="inputPerfilContratante" type="texto" name="email" id="email" value={this.state.user.email} disabled={this.state.botao} onChange={e => this.handleChange(e)}></input><br />
                <p id="atualizado">{this.state.atualizado}</p>
                <button className="buttonPrestador" id="editar" disabled={!this.state.botao} onClick={e => this.habilitaDesabilita(e)}>Editar</button>
                <button className="buttonPrestador" id="salvar" disabled={this.state.botao} onClick={e => this.habilitaDesabilita(e)}>Salvar</button>
            </React.Fragment>
        )
    }
}