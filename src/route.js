import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './hoc/auth'
import Layout from './hoc/layout'
import home from './containers/home';
import userpage from './containers/userPage';
import adminPage from './containers/adminPage';
import NotAuthorized from './containers/notAuthorize';


const Routes = () => {      
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(home, false)}/>
                <Route path="/userpage" eaxct component={Auth(userpage)}/>
                <Route path="/adminpage" exact component={Auth(adminPage, true, 'admin')}/>
                <Route path="/notauthorize" exact component={Auth(NotAuthorized, false)}/>
            </Switch>
        </Layout>
    );
};
export default Routes;