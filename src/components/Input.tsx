import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: white;

  > div {

    line-height: 50px;

    > input {
      background: none;
      border: none;
    }

  }
`;


type  Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;

  return (
    <Wrapper>
      <div>
        <span>{props.label}</span>
        <input {...rest}/>
      </div>
    </Wrapper>
  );
};

export {Input} ;