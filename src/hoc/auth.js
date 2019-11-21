
import React,{ Component } from 'react';
import { userAuth } from '../actions'
import {connect} from 'react-redux';
import LoadingAnim from '../components/loadingAnim';

export default function(ComposedClass,needAuthorization=true, authorizedFor="user"){
    class AuthenticationCheck extends Component {

        state = {
            loading:true
        }

        componentWillMount(){
            this.props.dispatch(userAuth())      
        }
        componentWillReceiveProps(nextProps){
            if(nextProps.user.type){
                if (!needAuthorization) {
                    this.setState({ loading: false });
                }
                else if(authorizedFor==='user'){
                    if(nextProps.user.type==='user'){
                        this.setState({ loading: false });
                    }else{
                        this.props.history.push(`/notauthorize`)
                    }
                }else{
                    if(nextProps.user.type==='admin'){
                        this.setState({ loading: false });
                    }else{
                        this.props.history.push(`/notauthorize`)
                    }
                }
            }
        }

        render(){
            if(this.state.loading){
                return <LoadingAnim/>
            }
            return(
                <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
    }

    function mapStateToProps(state){
        return{
            user:state.user.auth
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck)

}