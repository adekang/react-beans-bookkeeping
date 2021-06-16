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


const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/index" activeClassName="selected">
            <Icon name="users"/>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/detail" activeClassName="selected">
            <Icon name="money"/>
            明细
          </NavLink>
        </li>

        <li>
          <NavLink to="/charts" activeClassName="selected">
            <Icon name="charts"/>
            统计
          </NavLink>
        </li>



      </ul>
    </NavWrapper>
  );
};


export {Nav};