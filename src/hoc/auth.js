import React from 'react';
import Header from '../components/header';
const Auth = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
};

export default Auth;