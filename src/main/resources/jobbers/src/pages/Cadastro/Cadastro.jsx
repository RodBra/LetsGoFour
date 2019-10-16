import React, { Component, Fragment } from 'react'
import '../css/cadastro.css'
export default class Cadastro extends Component {
    render() {
        return (
            <Fragment>

                <header>
                    <h1>Cadastro</h1><br />

                </header>

                <body className="body">

                    <form role="form">
                        <div class="form-group col-lg-4">
                            <label for="exampleInputEmail1">Campo simples</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Insira seu texto aqui"></input>
                        </div>
                        <div class="form-group col-lg-4">
                            <label for="exampleInputEmail1">Campo simples</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Insira seu texto aqui"></input>
                        </div>




                    </form>



                    {/* <form className="form-group formu" >



                        <h2>Informações Pessoais</h2> <br /><br />
                        <div>
                        <label className="label">Nome Completo:</label><br />
                        <input className="inpu" id="name"  placeholder="João Batista dos Santos"></input><br />
                        <label className="label">Telefone/Celular:</label><br />
                        <input className="inpu" id="fone"  placeholder="  (DDD) 1 2345-6789"></input><br />

                        <h2>Login</h2><br /><br />

                        <label className="label">E-mail:</label><br />
                        <input className="inpu" id="email"  placeholder="  joao.batista@gmail.com"></input><br />
                        <label className="label" >Confimar E-mail:</label><br />
                        <input className="inpu" id="confirmaEmail"  placeholder="  joao.batista@gmail.com"></input><br />
                        <label className="label">Apelido:</label><br />
                        <input className="inpu" id="apelido"  placeholder="  joaozinho007"></input><br /><br/>
                        </div>

                        <div className="passwd">
                        <label className="label">Senha:</label>
                        <input className="passwd"  placeholder="  ************"></input>
                        </div>

                        <div className="checkpass">
                        <label className="label"> Confirmar Senha:</label>
                        <input className="checkpass"  placeholder="  ************"></input>
                        </div>
                        

                        <h2>Endereço</h2><br /><br />
                        <div className="passwd">
                        <label className="label">Estado:</label><br />
                        <input className="passwd" id="estado"  placeholder="  São Paulo"></input><br />
                        </div>
                        <div className="checkpass">
                        <label className="label">Cidade:</label><br />
                        <input className="checkpass" id="cidade"  placeholder="  São Paulo"></input><br />
                        </div>  

                        <div className="passwd">
                        <label className="label">Rua:</label><br />
                        <input className="passwd" id="rua"  placeholder="  Rua dos bobos"></input><br />
                        </div>
                        <div className="checkpass">
                        <label className="label">Numero:</label><br />
                        <input className="checkpass" id="numero"  placeholder="  000" /><br />
                        </div>

                        <div className="passwd">
                        <label className="label">Complemento:</label><br />
                        <input className="passwd" id="complemento"  size="18" placeholder="  Casa 1" />
                        </div>

                        <input className="inputc"  id="agree" type="checkbox" ></input>
                        <label >Li e concordo com os termos.</label>
                        <input type="submit" value="Cadastrar" /><br />
                        
                    </form> */}
                </body>


            </Fragment>
        )
    }
}