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
        width: 50%;
      }
    }
  }

`;


type  Props = {
  value: number,
  onChange: (value: number) => void,
  onOk?: () => void
}


const NumberPadPart: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(JSON.stringify(props.value));
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'ok') {
      if (props.onOk) {
        props.onOk();
      }
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
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
        <button className="dot">.</button>
        <button className="ok">ok</button>
      </div>
    </Wrapper>
  );
};

export default NumberPadPart;