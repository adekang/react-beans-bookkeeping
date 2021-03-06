import React from 'react';
import styled from 'styled-components';
import NumberPadPart from './NumberPadPart';
import NotePart from './NotePart';
import SelectionPart from './SelectionPart';

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.1);
`;


type Props = {
  note: string,
  category: '-' | '+',
  amount: number,
  onChangeNote: (note: string) => void,
  onChangeAmount: (amount: number) => void,
  onChangeCategory: (category: '-' | '+') => void,
  onOk?: () => void

}
const RecordsSection: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <SelectionPart {...props}/>
      <NotePart {...props}/>
      <NumberPadPart{...props}/>
    </Wrapper>
  );
};

export default RecordsSection;