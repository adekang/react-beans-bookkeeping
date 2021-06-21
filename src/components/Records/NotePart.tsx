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


type  Props = {
  note: string,
  onChangeNote: (value: string) => void
}

const NotePart: React.FC<Props> = (props) => {
  const {note} = props;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChangeNote(e.target.value);
  };
  return (
    <Wrapper>
      <div>
        <span>备注：</span>
        <input value={note} onChange={onChange} type="text" placeholder="请输入备注"/>
      </div>
    </Wrapper>
  );
};

export default NotePart;