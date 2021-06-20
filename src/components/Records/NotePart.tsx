import React, {useRef, useState} from 'react';
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


const NotePart: React.FC = (props) => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <div>备注：<input ref={refInput} defaultValue={note} onBlur={onBlur} type="text" placeholder="请输入备注"/></div>
    </Wrapper>
  );
};

export default NotePart;