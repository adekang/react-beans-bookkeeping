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


const RecordsSection: React.FC = () => {
  let history = useHistory();
  const submit = () => {
    alert('保存成功');
    history.push('/');
  };
  return (
    <Wrapper>
      <SelectionPart/>
      <NotePart/>
      <NumberPadPart/>
    </Wrapper>
  );
};

export default RecordsSection;