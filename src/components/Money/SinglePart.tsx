import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';


const Wrapper = styled.div`
  > ul {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18.5px 0;
      border-bottom: 1px solid #EBEBEB;

      > p:nth-child(1) {
        font-size: 14px;
        color: #7D7D7D;
        display: flex;
        justify-content: center;
        align-items: center;

        > span {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #F5F5F5;
          border-radius: 50%;
          margin-right: 10px;
        }

        .icon {
          font-size: 24px;
          fill: #E9861C;
        }

      }

      > p:nth-child(2) {
        font-size: 18px;
        color: #FD5453;
        font-weight: 700;
      }
    }
  }
`;
const SinglePart: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li><p><span><Icon name="fruits"/></span>水果</p><p>-23.00</p></li>
        <li><p><span>Icon</span>水果</p><p>-23.00</p></li>
      </ul>
    </Wrapper>
  );
};
export default SinglePart;