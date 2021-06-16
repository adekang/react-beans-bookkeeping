import React, {ChangeEventHandler} from 'react';
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

type Props = {
  value: string,
  onChange: (value: string) => void
}
const NotePart: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <div>备注：<input type="text" value={note} onChange={onChange} placeholder="请输入备注"/></div>
    </Wrapper>
  );
};

export default NotePart;