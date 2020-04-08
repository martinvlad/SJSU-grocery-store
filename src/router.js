import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App'
import Checkout from './components/CheckoutFinal'
import Tracker from './components/CheckoutFinal/Tracker'
export default class AppRouter extends Component {
    render(){
        return(
            <Router>
                <Route exact path='/'component={App}></Route>
                <Route exact path='/checkout/' component={Checkout}></Route>
                <Route exact path='/track' component={Tracker}></Route>
            </Router>
        )
    }
}