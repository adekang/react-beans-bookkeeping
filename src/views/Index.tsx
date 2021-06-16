import React from 'react';

import Layout from '../components/Layout';
import {NavLink} from 'react-router-dom';
import Icon from '../components/Icon';
import styled, {keyframes} from 'styled-components';

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//
//   to {
//     transform: rotate(180deg);
//   }
// `;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  > h1 {
    padding-bottom: 20px;
  }

  > div {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 600;
    color: #ff9160;

    > span {
      padding: 0 5px;
      color: #ff5e64;
      text-align: center;
    }
  }
`;
const Record = styled.div`
  margin-top: 25px;

  > a {
    display: flex;
    justify-content: center;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      padding: 14px 20px;
      border-radius: 4px;
      background: linear-gradient(0deg, #ff5e64 0%, #ff9160 100%);
      box-shadow: 0px -2px 10px 0px rgba(255, 100, 100, 0.10);

      > .icon {
        fill: #fff;
        width: 16px;
        height: 16px;
      }
    }
  }
`;

function Index() {
  return (
    <Layout>
      <Wrapper>
        <h1>豆子记账</h1>
        <div>
          今日支出：<span>200￥</span>
        </div>
        <div>
          今日收入：<span>1￥</span>
        </div>
        <Record>
          <NavLink to="/index/records" activeClassName="selected">
            <span>
              记一笔
              <Icon name="records" className="whirl"/>
            </span>
          </NavLink>
        </Record>
      </Wrapper>
    </Layout>
  );
}

export default Index;