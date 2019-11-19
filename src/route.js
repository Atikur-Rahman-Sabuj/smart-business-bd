import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout'
import home from './containers/home';
import page1 from './containers/page1';
import page2 from './containers/page2';


const Routes = () => {      
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/page1" eaxct component={page1}/>
                <Route path="/page2" exact component={page2}/>
            </Switch>
        </Layout>
    );
};
export default Routes;