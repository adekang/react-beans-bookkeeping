import React from 'react';
import {Link, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import {OutlayLib} from './ChartsLib/OutlayLib';
import {IncomeLib} from './ChartsLib/ IncomeLib';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  > hr {
    height: 2px;
    border: none;
    background-color: #ccc;
  }
`;
const NavWrapper = styled.ul`
  padding: 0 16px;
  display: flex;
  justify-content:space-around;
  margin-bottom: 5px;

  > li {
    border-radius: 3px;
    padding: 10px 5px;
    background: linear-gradient(0deg, #ff5e64 0%, #ff9160 100%);
    box-shadow: 0px -2px 10px 0px rgba(255, 100, 100, 0.10);
    color: white;
    font-weight: 600;

    > a {
      padding: 10px 5px;
    }
  }
`;
const SwitchWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 350px;
`;



const SelectedPart: React.FC = () => {
  let {path, url} = useRouteMatch();
  return (
    <Wrapper>
      <NavWrapper>
        <li>
          <Link to={`${url}/outlay`}>支出分析</Link>
        </li>
        <li>
          <Link to={`${url}/income`}>收入分析</Link>
        </li>
      </NavWrapper>
      <SwitchWrapper>
        <Switch>
          <Route exact path={`${path}/outlay`}>
            <OutlayLib/>
          </Route>
          <Route exact path={`${path}/income`}>
            <IncomeLib/>
          </Route>
          <Redirect exact from="/charts" to={`${url}/outlay`}/>
        </Switch>
      </SwitchWrapper>
    </Wrapper>
  );
};

export default SelectedPart;