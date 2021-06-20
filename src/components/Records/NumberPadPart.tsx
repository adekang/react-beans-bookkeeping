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
  const [output, _setOutput] = useState<string>('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '删除':
        if (output.length === 1) {
          setOutput('');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case '清空':
        setOutput('');
        break;
      case 'ok':
        console.log('ok');
        break;
      case '今天':
        console.log('今天');
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div onClick={onClickButtonWrapper}>
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