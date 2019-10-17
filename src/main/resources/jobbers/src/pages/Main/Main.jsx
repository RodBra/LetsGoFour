import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/main.css'
import Header from '../components/Header'

export default class Main extends Component {
    render() {
        return(
            <Fragment>
                <Header {...this.props}/>
                <main className="content container-fluid">
                    Conteúdo
                </main>
            </Fragment>
        )
    }
}