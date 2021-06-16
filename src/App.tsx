import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Users from './views/Users';
import Date from './views/Date';
import Records from './views/Records';
import Charts from './views/Charts';
import NoMatch from './views/NoMatch';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/money" exact>
          <Money/>
        </Route>

        <Route path="/date" exact>
          <Date/>
        </Route>

        <Route path="/users" exact>
          <Users/>
        </Route>

        <Route path="/charts" exact>
          <Charts/>
        </Route>

        <Route path="/records" exact>
          <Records/>
        </Route>

        <Redirect exact from="/" to="/money"/>

        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
};


export default App;