import React, {useState} from 'react';
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
  return (
    <Wrapper>
      <div>备注：<input value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="请输入备注"/></div>
    </Wrapper>
  );
};

export default NotePart;