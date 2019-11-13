import React, {Component} from 'react'
// import logo from '';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/logo.css'

export default class Logo extends Component {
    render() {
        return (
            <aside className="logo">
                {/* <a href="/" className="logo">
                    <img src={logo} alt="logo"/>
                </a> */}
                logo
            </aside>
        )
    }
}
