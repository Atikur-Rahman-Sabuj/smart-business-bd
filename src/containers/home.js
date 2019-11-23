import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import userDataAccess from '../dataAccess/userDataAccess';
import {showFlashMessageWithTimeout} from '../actions'

class home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    } 
    userLogout=()=>{
        userDataAccess.userLogout(this.props.user).then(data=>{
            //do what you wanna do on successful logout
        }).catch(error=>{
            //show your error message
            showFlashMessageWithTimeout({text: "Server error", type:'danger'}, this.props.dispatch)
        })
    }
    render() { 
        return ( 
            <div>
                {this.props.user.type==="none"?<div><Link className="btn btn-sm btn-primary" to="./login">Login</Link>&nbsp; &nbsp; <Link className="btn btn-sm btn-primary" to="./register">Register</Link></div>:
                <div>Logged in as {this.props.user.type}&nbsp;<button onClick={this.userLogout} className="btn btn-sm btn-primary">Logout</button></div>}
                <br/>
                This is home page accessible for all
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/userpage">User page</Link>
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/adminpage">Admin page</Link>
            </div>
         );
    }
}
 
export default home;