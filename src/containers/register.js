import React, { Component } from 'react'
import {stringLowerLimit, email, required} from '../services/validator'
import {Field, reduxForm} from 'redux-form'
import {SaInputRender} from '../components/inputRenderer'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import userDataAccess from '../dataAccess/userDataAccess'
import {showFlashMessageWithTimeout} from '../actions'

const stringLowerLimit8 = stringLowerLimit(8);
class register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onSubmit=(values)=>{
        console.log(values)
        userDataAccess.userRegister(values).then(data=>{
            //onSuccessFulRegister
            //this.props.history.push('/login');
            //if register was unacceptable
            //show a error message
        }).catch(error=>{
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
                    <button className="btn btn-primary" type="submit">Register</button>

                    <br/><br/>
                    <Link to="/login">Already have a account. Login hare.</Link>
                 </form>
            </div>
         );
    }
}
 
const mapStateToProps = (state, ownProps) => ({
    
})

register = reduxForm({
    form : 'register',

})(register)

export default connect(mapStateToProps, null)(register)