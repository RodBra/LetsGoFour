import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar.css'

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div className="col-3 dimensoes div-nav">
                        <a className="nav-link active font-style" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Inicio</a>
                        <a className="nav-link font-style" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Perfil</a>
                        <a className="nav-link font-style" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Historico</a>
                </div>
                <div className="col-9 ">
                    <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                    </div>
                </div> */}

                <aside className="menu-area">
                    <nav className="menu">
                        <a href="#/">
                            <i className="fa fa-home"></i> Inicio
                        </a>
                        <a href="#/search">
                            <i className="fa fa-search"></i> Pesquisar
                        </a>
                        <a href="#/perfil">
                            <i className="fa fa-user"></i> Perfil
                        </a>
                        <a href="#/history">
                            <i className="fa fa-history"></i> Historico
                        </a>
                        <a href="#/logout">
                            <i className="fa fa-sign-out"></i> Sair
                        </a>
                    </nav>
                </aside>
            </React.Fragment>
        );
    }
}