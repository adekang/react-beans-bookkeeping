import React, { useState } from "react";
import styled from "styled-components";
import { generateOutput } from "./generateOutput";

const Wrapper = styled.div`
  .output {
    line-height: 50px;
    text-align: right;
    padding: 0 20px;
    border: 0.5px solid #e6e6e6;
    background-color: white;
  }

  > div {
    clear: both;
    > button {
      width: 25%;
      height: 65px;
      border: 0.5px solid #e6e6e6;
      background-color: white;

      &.zero {
        width: 75%;
      }
      &.ok {
        height: 130px;
        float: right;
      }
    }
  }
`;

type Props = {
  amount: number;
  onChangeAmount: (amount: number) => void;
  onOk?: () => void;
};

const NumberPadPart: React.FC<Props> = props => {
  const [output, _setOutput] = useState("0");
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = "0";
    }
    _setOutput(output);

    props.onChangeAmount(parseInt(output));
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {
      return;
    }
    if (text === "ok") {
      if (props.onOk) {
        setOutput("");
        props.onOk();
      }
      return;
    }
    if (text === "今天") {
      console.log("今天");
      return;
    }
    if ("0123456789".split("").concat(["删除", "清空"]).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        {/* <button className='date'>今天</button> */}
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>ok</button>
        <button className='zero'>0</button>
      </div>
    </Wrapper>
  );
};

export default NumberPadPart;
