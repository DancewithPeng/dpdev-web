import React from 'react';
import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import 'antd/dist/antd.css';
import { SigninPage } from './routes/signin_page';
import { SignupPage } from './routes/signup_page';
import { SigninSuccessPage } from './routes/signin_success_page';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/auth').default);

// 4. Router
app.router(({ history }) => (
    <Router history={ history }>
        <Switch>
           <Route path="/" exact component={ SigninPage } />
           <Route path="/signup" exact component={ SignupPage } />
           <Route path="/signinsuccess" exact component={ SigninSuccessPage } />
        </Switch>
    </Router>
));
  
// 5. Start
app.start('#root');

export default app._store;