import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
// import Routes from './pages/Routes';
import PrincipalApp from './pages/PrincipalApp/PrincipalApp';

// import Login from './pages/Login/Login'
// import PrincipalApp from './pages/PrincipalApp/PrincipalApp'



export default class App extends Component {
    render() {

        return <PrincipalApp/>
        // <Routes/>
            // return (
            //     <React.Fragment>
            //         {/* <Login/> */}
            //         {/* <PrincipalApp/> */}
            //     </React.Fragment>
            // )
    }
}