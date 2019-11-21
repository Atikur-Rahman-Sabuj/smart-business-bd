import React from 'react'
import {Link} from 'react-router-dom'
function NotAuthorized() {
    return (
        <div>
            You are not authorized to view this page
            <br/><br/>
            <Link className="btn btn-sm btn-outline-primary" to="/">Home</Link>
        </div>
    )
}

export default NotAuthorized
