import React from 'react';

import Layout from '../components/Layout';
import {NavLink} from 'react-router-dom';
import Icon from '../components/Icon';
import styled from 'styled-components';

const Record = styled.li`
  > a {

    > span {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(0deg, #ff5e64 0%, #ff9160 100%);
      box-shadow: 0px -2px 10px 0px rgba(255, 100, 100, 0.10);
      line-height: 60px;

      > .icon {
        fill: #fff;
      }
    }
  }
`;

function Index() {
  return (
    <Layout>
      <div>
        <Record>
          <NavLink to="/index/records" activeClassName="selected">
            <span>
              <Icon name="records" className="whirl"/>
            </span>
          </NavLink>
        </Record>
      </div>
    </Layout>
  );
}

export default Index;