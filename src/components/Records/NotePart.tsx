import React, {useRef} from 'react';
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
  note: string,
  onChangeNote: (value: string) => void
}


const NotePart: React.FC<Props> = (props) => {
  const {note} = props;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChangeNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <div>备注：<input ref={refInput} defaultValue={note} onBlur={onBlur} type="text" placeholder="请输入备注"/></div>
    </Wrapper>
  );
};

export default NotePart;