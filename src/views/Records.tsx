import React, {useState} from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/Records/HeaderSection';
import RecordsSection from '../components/Records/RecordsSection';


const LayoutWrapper = styled.div`
  height: 100vh;
  max-width: 414px;
  display: flex;
  flex-direction: column;

`;

type Category = '-' | '+'

function Records() {
  const [selected, setSelected] = useState({
    tags: [] as number[],
    note: '',
    category: '-' as Category,
    amount: '0'

  });

  console.log(selected);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  return (
    <LayoutWrapper>
      {selected.tags}
      --
      {selected.note}
      --
      {selected.category}
      --
      {selected.amount}
      <HeaderSection value={selected.tags} onChange={(tags) => {onChange({tags});}}/>
      <RecordsSection
        note={selected.note} onChangeNote={(note) => {onChange({note});}}
        category={selected.category} onChangeCategory={(category) => {onChange({category});}}
        amount={selected.amount} onChangeAmount={(amount) => {onChange({amount});}}
        onOk={() => {}}
      />
    </LayoutWrapper>
  );
}

export default Records;