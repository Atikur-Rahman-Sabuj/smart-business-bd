import React, { Component } from 'react'
import {stringLowerLimit, email, required} from '../services/validator'
import {Field, reduxForm} from 'redux-form'
import {SaInputRender} from '../components/inputRenderer'
import { connect } from 'react-redux'
import{Link} from 'react-router-dom'
import userDataAccess from '../dataAccess/userDataAccess'
import {showFlashMessageWithTimeout} from '../actions'

const stringLowerLimit8 = stringLowerLimit(8);
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onSubmit=(values)=>{
        console.log(values)
        userDataAccess.userLogin(values).then(data=>{
            //onSuccessFulLogin 
            //this.props.history.push('/home');
            //if login was unacceptable
            //show a error message
        }).catch(error=>{
            console.log("error")
            //show message that a error happened 
            showFlashMessageWithTimeout({text: "Server error", type:'danger'}, this.props.dispatch)
        })
    }
    render() { 
        return ( 
            <div>
                <Link className="btn btn-sm btn-outline-primary" to="/">Home</Link>
                <br/><br/>
                 <form onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
                    <Field name="email" type="text" component={SaInputRender} placeholder="example@example.com" label="Email" validate={[required,email]}/>
                    <Field name="password" type="password" component={SaInputRender}  label="Password" validate={[required,stringLowerLimit8]}/>
                    <button className="btn btn-primary" type="submit">Login</button>
                    <br/><br/>
                    <Link to="/register">Don't have a account. Register hare.</Link>
                 </form>
            </div>
         );
    }
}
 
const mapStateToProps = (state, ownProps) => ({
    
})

login = reduxForm({
    form : 'login',
    
})(login)

export default connect(mapStateToProps, null)(login)