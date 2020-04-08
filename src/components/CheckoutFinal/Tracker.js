import React, {Component} from 'react'
import {Circle} from 'rc-progress'
export default class extends Component {
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1>Order #34</h1>
                <Circle percent="25" strokeWidth="1" strokeColor="green" style={{width:"20%"}}  />
                <h2>Status: Your order is being picked up</h2>
                <h2>Estimated Time of Arrival: 6:45 PM</h2>
                <h3>Driver: John Appleseed</h3>
                <h3>Phone #: 408-123-4567</h3>
                <h4>Click <a href="/support">here</a> to contact support</h4>
            </div>
        )
    }
}