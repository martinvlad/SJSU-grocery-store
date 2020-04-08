import React, {Component} from 'react'
export default class Details extends Component{
    
    render(){
        return(
            <div>
                <h1>Hey, {this.props.name} <br/></h1>
                <h2>Please confirm the following details </h2>
                <h3>Address: {this.props.address}<br/>
                Email: {this.props.email}<br/>
                Card: Visa card ending with 8123</h3><br/>
                <button><a href="http://localhost:3000/track">Confirm</a></button>
            </div>
        )
    }
}