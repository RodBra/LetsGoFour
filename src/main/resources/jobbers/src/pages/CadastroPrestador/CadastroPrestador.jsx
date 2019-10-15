import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/cadastroPrestador.css'

export default class cadastroPrestador extends Component {
    render() {
        return (
            <Fragment>

                <header>
                    <h1>Cadastro de Prestadores</h1><br />

                </header>

                <body className="body">
                    <form className="form-group formu" >



                        <h2>Informações Pessoais</h2> <br /><br />

                        <label className="label">Nome Completo:</label><br />
                        <input className="input" id="name" type="text" placeholder="João Batista dos Santos"></input><br />
                        <label className="label">RG</label><br />
                        <input className="input" id="rg" type="text" placeholder="  12.345.678.9"></input><br />
                        <label className="label">CPF</label><br />
                        <input className="input" id="cpf" type="text" placeholder="  121.345.678.19"></input><br />

                        <h2>Login</h2><br /><br />

                        <label className="label">E-mail:</label><br />
                        <input className="input" id="email" type="text" placeholder="  joao.batista@gmail.com"></input><br />
                        <label className="label" >Confimar E-mail:</label><br />
                        <input className="input" id="confirmaEmail" type="text" placeholder="  joao.batista@gmail.com"></input><br />
                        <label className="label">Apelido:</label><br />
                        <input className="input" id="apelido" type="text" placeholder="  joaozinho007"></input><br />

                        <label className="label">Senha:</label><br />
                        <input className="input"  type="text" placeholder="  ************"></input><br />
                        <label className="label">Confirmar Senha:</label><br />
                        <input className="input"  type="text" placeholder="  ************"></input><br />

                        <h2>Endereço</h2><br /><br />
                        <label className="label">Estado:</label><br />
                        <input className="input" id="estado" type="text" placeholder="  São Paulo"></input><br />
                        <label className="label">Cidade:</label><br />
                        <input className="input" id="cidade" type="text" placeholder="  São Paulo"></input><br />
                        <label className="label">Rua:</label><br />
                        <input className="input" id="rua" type="text" placeholder="  Rua dos bobos"></input><br />
                        <label className="label">Numero:</label><br />
                        <input className="input" id="numero" type="text" placeholder="  000" /><br />
                        <label className="label">Complemento:</label><br />
                        <input className="input" id="complemento" type="text" size="18" placeholder="  Casa 1" /><br />
                        <h2>Contato</h2><br/><br/>

                        <label className="label">Celular</label><br />
                        <input className="input" id="celular" type="text" placeholder=" (DDD) 1 2345-6789"></input><br /> 
                        <label className="label">Telefone</label><br />
                        <input className="input" id="fone" type="text" placeholder="  12.345.678.9"></input><br />


                        <input className="inputc" id="agree" type="checkbox" ></input>
                        <label className="inputc">Li e concordo com os termos.</label>
                        <input type="submit" value="Cadastrar" /><br />
                        
                    </form>
                </body>


            </Fragment>
        )
    }
}