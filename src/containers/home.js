import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                This is home page accessible for all
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/page1">Page1</Link>
                <br/><br/>
                <Link className="btn btn-sm btn-outline-primary" to="/page2">Page2</Link>
            </div>
         );
    }
}
 
export default home;