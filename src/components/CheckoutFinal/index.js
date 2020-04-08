import React, {Component} from 'react'
import axios from 'axios'
import './style.css'
import Details from './Details'
import {GoogleLogin} from 'react-google-login'
import Swal from 'sweetalert2';
import Item from './Item'
import NewUser from './NewUser'
const queryString  = require('query-string')
export default class Checkout extends Component{
    constructor(props){
        super(props);
        this.state = {
            orderID:queryString.parse(this.props.location.search).id,
            showForm:false,
            order:1,
            complete:false,
            userEmail:null,
            userName:null,
            userAddress:null,
            registered:false,
            newUser:false
        }
        axios.get(`http://localhost:40/api/order/get/${this.state.orderID}`).then((res)=> {
            this.setState({order:res.data})
            this.setState({complete:true})
        })
    }
    popForm = () => {
        this.setState({showForm:true})
    }
    componentDidMount(){
        
        console.log(queryString.parse(this.props.location.search))
    }
    checkUserStatus = (email) => {
        axios({method:'get', url:`http://localhost:40/api/checkUser/${email}`}).then((res)=> {
        if(res.data.status === 0){
            this.setState({newUser:true})
        }else{
            this.setState({userAddress:res.data.address})    
            this.setState({registered:true})
        }
        
        })
    }
    googleSuccess = (res) => {
        const email = res.profileObj.email
        const name = res.profileObj.name
        this.setState({userEmail:email})
        this.setState({userName:name})
        this.checkUserStatus(email)
    }
    googleFailure = () => {
        Swal.fire('Error', 'Try logging in again', 'error')
    }
    render(){
        return (
            <div className="checkout" style={{paddingLeft:"5%"}}>
                <h1 id="main"><u>Checkout</u></h1>
                <h2 id="title">Spartan Organic Food Store</h2>
                <h2>Order:</h2>
                {(!this.state.complete) ? null : this.state.order.products.map(v=> <Item name={v.title} quantity={v.quantity} price={v.price * v.quantity} key={Math.random()}/>)}
                <h2>Total: $  { (!this.state.complete) ? null : this.state.order.total.totalPrice.toFixed(2)}</h2>
                <div id="auth">
                    <div>
                    <GoogleLogin
    clientId="129086773964-42vg3lj1qos4j24nc31nv1mfj34s7m20.apps.googleusercontent.com"
    buttonText="Login with Spartan ID"
    onSuccess={this.googleSuccess}
    onFailure={this.googleFailure}
    cookiePolicy={'single_host_origin'}
  />
  
                    </div><br/>
                    <div>
                    </div><br/><br/>
                </div>
                {
                    (!this.state.registered) ? null : <Details address={this.state.userAddress} email={this.state.userEmail} name={this.state.userName}/>
                }
                {
                    (!this.state.newUser) ? null : <NewUser/>
                }
               
            </div>
            
        )
    }
}