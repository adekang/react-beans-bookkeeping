import React, {useState} from 'react';
import styled from 'styled-components';
import {generateOutput} from './generateOutput';

const Wrapper = styled.div`
  .output {
    line-height: 50px;
    text-align: right;
    padding: 0 20px;
    border: 0.5px solid #E6E6E6;
    background-color: white;
  }

  > div {
    > button {
      width: 25%;
      height: 65px;
      border: 0.5px solid #E6E6E6;
      background-color: white;

      &.zero {
        width: 75%;
      }
    }
  }

`;


const NumberPadPart: React.FC = () => {

  return (
    <Wrapper>
      <div className="output">100</div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>今天</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>删除</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>清空</button>
        <button className="zero">0</button>
        <button className="ok">ok</button>
      </div>
    </Wrapper>
  );
};

export default NumberPadPart;