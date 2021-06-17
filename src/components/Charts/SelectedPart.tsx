import React from 'react';
import {Link, Redirect, Route, Router, Switch, useRouteMatch} from 'react-router-dom';
import {OutlayLib} from './ChartsLib/OutlayLib';
import {IncomeLib} from './ChartsLib/ IncomeLib';
import {TotalLib} from './ChartsLib/TotalLib';

const SelectedPart: React.FC = () => {
  let {path, url} = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/total`}>总和分析</Link>
        </li>
        <li>
          <Link to={`${url}/outlay`}>收入分析</Link>
        </li>
        <li>
          <Link to={`${url}/income`}>支出分析</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/total`} component={TotalLib}/>
        <Route exact path={`${path}/outlay`} component={OutlayLib}/>
        <Route exact path={`${path}/income`} component={IncomeLib}/>
        <Redirect exact from="/statistics" to={`${url}/total`}/>
      </Switch>
    </div>
  );
};

export default SelectedPart;