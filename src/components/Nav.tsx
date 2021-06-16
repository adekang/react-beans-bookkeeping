import {NavLink} from 'react-router-dom';
import React from 'react';
import styled, {keyframes} from 'styled-components';
import Icon from './Icon';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const NavWrapper = styled.nav`
  box-shadow: 0px -1px 0px 1px rgba(20, 7, 0, 0.1);
  background-color: #FFFFFF;


  > ul {
    display: flex;

    > li {
      padding: 5px 0;
      width: 33.3%;
      text-align: center;

      > a {
        font-size: 12px;
        color: #999999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 22px;
          height: 22px;
          margin-bottom: 4px;
        }

        &.selected {
          color: #FC5460;

          .icon {
            fill: #FC5460;
          }

          .whirl {
            fill: white;
            animation: ${rotate} 250ms linear;
          }

        }
      }
    }
  }
`;

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
const Nav = () => {
  return (
    <NavWrapper>
      <ul>

        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            钱包
          </NavLink>
        </li>

        <li>
          <NavLink to="/charts" activeClassName="selected">
            <Icon name="charts"/>
            图标
          </NavLink>
        </li>

        <Record>
          <NavLink to="/records" activeClassName="selected">
            <span>
              <Icon name="records" className="whirl"/>
            </span>
          </NavLink>
        </Record>

        <li>
          <NavLink to="/date" activeClassName="selected">
            <Icon name="date"/>
            日期
          </NavLink>
        </li>

        <li>
          <NavLink to="/users" activeClassName="selected">
            <Icon name="users"/>
            用户
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};


export {Nav};