import React, {useState} from 'react';
import styled from 'styled-components';
import HeaderSection from 'components/Records/HeaderSection';
import RecordsSection from 'components/Records/RecordsSection';
import {useRecords} from '../hooks/useRecords';


const LayoutWrapper = styled.div`
  height: 100vh;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

`;

type Category = '-' | '+'
export const defaultFormDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Records() {
  const [selected, setSelected] = useState(defaultFormDate);
  const {addRecords} = useRecords();

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const submit = () => {
    if (addRecords(selected)) {
      alert('保存成功');
      setSelected(defaultFormDate);
    }
  };
  return (
    <LayoutWrapper>
      <HeaderSection value={selected.tagIds} onChange={(tagIds) => {onChange({tagIds});}}/>
      <RecordsSection
        note={selected.note} onChangeNote={(note) => {onChange({note});}}
        category={selected.category} onChangeCategory={(category) => {onChange({category});}}
        amount={selected.amount} onChangeAmount={(amount) => {onChange({amount});}}
        onOk={() => submit()}
      />
    </LayoutWrapper>
  );
}

export default Records;