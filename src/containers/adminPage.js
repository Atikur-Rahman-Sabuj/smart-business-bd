import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                I am a admin
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/">Home</Link>
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/userpage">User page</Link>
            </div>
         );
    }
}
 
export default page2;