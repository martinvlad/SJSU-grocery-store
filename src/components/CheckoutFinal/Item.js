import React, {Component} from 'react'

export default class Item extends Component{
    render(){
        return(
            <div >
                <div >
                <h3>{this.props.name} x {this.props.quantity}</h3>
                </div>
                <div style={{paddingLeft:"8%"}}>
                    {this.props.price}$
                </div>
            </div>
        )
    }
}