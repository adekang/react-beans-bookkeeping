import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 24.5px 20px 0 20px;
  justify-content: space-between;
  color: #999999;
  font-size: 14px;

  > div {
    display: flex;

    > p {
      :nth-child(odd) {
        padding-right: 10px;
      }
    }
  }

`;

const DatePart: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <p>7月9日</p>
        <p>星期六</p>
      </div>
      <div>
        <p>收入：<span>123</span></p>
        <p>支出：<span>123</span></p>
      </div>
    </Wrapper>
  );
};
export default DatePart;