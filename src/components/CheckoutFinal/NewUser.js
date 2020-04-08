import React, {Component} from 'react'
import axios from 'axios'
export default class NewUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:null,
            address:null
        }
    }
    handleNChange = (event)=>{
        this.setState({name: event.target.value});
    }
    handleAChange= (event)=> {
        this.setState({address: event.target.value});
    }
    createUser = ()=> {
        axios({method:'get', url:`http://localhost:40/api/createUser/${this.state.name}`}).then((res)=> {
            this.props.history.push(`/track/?id=34`)
        })
    }

    render(){
        return(
            <div style={{fontSize:"30px"}}>
                Name: <br/><input type="text" value={this.state.name} onChange={this.handleNChange}/><br/>
                Address:<br/> <input type="text" value={this.state.address} onChange={this.handleAChange}/><br/>
                Phone #: <br/><input type="text"/><br/>
                Instructions: <br/><input type="text"/><br/>
                Card: <br/><input type="text"/><br/>
                CVC: <br/><input type="text"/><br/>
                Expiry: <br/><input type="text"/> <br/>
                <button onClick={this.createUser}>Submit</button>
            </div>

        )
    }
}