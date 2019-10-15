import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './pages/css/app.css'

// import Login from './pages/Login/Login'
import Logo from './pages/components/Logo'
import Main from './pages/Main/Main'
import NavBar from './pages/components/NavBar'
import Footer from './pages/components/Footer'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Logo/>
        <NavBar/>
        <Main icon="home" title="Início"/>
        <Footer/>
      </div>
    )
  }
}