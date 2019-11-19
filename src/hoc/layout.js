import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div style={{padding:'20px'}}>
                {props.children}
            </div>
            <Footer/>
            
        </div>
    );
};

export default Layout;