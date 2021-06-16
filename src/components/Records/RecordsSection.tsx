import React, {useState} from 'react';
import styled from 'styled-components';
import NumberPadPart from './NumberPadPart';
import NotePart from './NotePart';
import SelectionPart from './SelectionPart';
import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.1);
`;

type Category = '-' | '+'

const defaultFormData = {
  note: '',
  category: '-' as Category,
  amount: 0
};

const RecordsSection: React.FC = () => {
  let history = useHistory();
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    alert('保存成功');
    history.push('/');
  };
  return (
    <Wrapper>
      <SelectionPart value={selected.category}
                     onChange={category => onChange({category})}/>
      <NotePart value={selected.note}
                onChange={note => onChange({note})}/>
      <NumberPadPart value={selected.amount}
                     onChange={amount => onChange({amount})}
                     onOk={submit}/>
    </Wrapper>
  );
};

export default RecordsSection;