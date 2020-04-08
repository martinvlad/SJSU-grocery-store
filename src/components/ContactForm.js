import React, {Component} from 'react'
import Swal from 'sweetalert2';

export default class CheckoutForm extends Component {
    successMessage = (e) => {
        e.preventDefault()
        Swal.fire('Success', 'Order has been placed', 'success')
    }
    render(){
        return (
            <div>
                <form action="#">
                <h1>Order details</h1>
                Full Name: <input id="pad" type="text"/><br/><br/>
                Phone number: <input id="pad" /><br/><br/>
                Delivery Address: <input id="pad" /><br/><br/>
                Card Number : <input id="pad" type="password" maxLength="16"/><br/><br/>
                Card Expiry: <input id="pad" maxLength="5"/><br/><br/>
                Card Security code: < input id="pad"/><br></br><br/>
                Zip Code: <input/><br/><br/>
                <button class="button" onClick={this.successMessage} style={{marginLeft:"40%"}}>Submit</button>
                </form>
            </div>
        )
    }
}