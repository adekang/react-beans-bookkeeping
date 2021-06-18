import React from 'react';
import {Link, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
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
      <hr/>
      <Switch>
        <Route exact path={`${path}/total`}>
          <TotalLib/>
        </Route>
        <Route exact path={`${path}/outlay`}>
          <OutlayLib/>
        </Route>
        <Route exact path={`${path}/income`}>
          <IncomeLib/>
        </Route>
        <Redirect exact from="/charts" to={`${url}/total`}/>
      </Switch>
    </div>
  );
};

export default SelectedPart;