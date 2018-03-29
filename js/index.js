import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mainpage from './Mainpage';
import Login from './Login';
import Signup from './Signup';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route path="/SignupPage" component={Signup} />
        <Route path="/MainPage" component={Mainpage} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
