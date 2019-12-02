import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/main.css'
import Header from '../components/Header'

export default class MainPrestador extends Component {
    render() {
        return(
            <Fragment>
                <Header {...this.props}/>
                <main className="content container-fluid">
                        {this.props.children}
                </main>
            </Fragment>
        )
    }
}