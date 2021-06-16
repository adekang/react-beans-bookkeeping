import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Detail from './views/Detail';
import Index from './views/Index';
import Records from './views/Records';
import Charts from './views/Charts';
import NoMatch from './views/NoMatch';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail" exact>
          <Detail/>
        </Route>

        <Route path="/index" exact>
          <Index/>
        </Route>

        <Route path="/charts" exact>
          <Charts/>
        </Route>

        <Route path="/index/records" exact>
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