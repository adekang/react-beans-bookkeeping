import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  > div {
    width: 50%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: white;
    border: 0.5px solid #E6E6E6;
    transition: all 100ms linear;

    &.selected {
      background-color: #FB9265;
      color: white;
    }

  }
`;


const SelectionParts: React.FC = () => {

  return (
    <Wrapper>
      <div>
        收入
      </div>
      <div>支出</div>
    </Wrapper>
  );
};

export default SelectionParts;