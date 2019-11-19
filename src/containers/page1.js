import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                I am a registered user
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/">Home</Link>
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/page2">Page2</Link>
            </div>
         );
    }
}
 
export default page1;