import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import NavBar from '../components/Money/NavBar';
import SinglePart from '../components/Money/SinglePart';
import SelectPart from '../components/Money/SelectPart';
import {useRecords} from '../hooks/useRecords';

const LayoutWrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


const Detail: React.FC = () => {
  type Keys = '-' | '+'
  const [current, setCurrent] = useState<Keys>('-');

  const onChange = (category: Partial<typeof current>) => {
    setCurrent(category);
  };

  return (
    <LayoutWrapper>
      <NavBar/>
      <SelectPart category={current} onChangeCategory={(current: Keys) => {onChange(current);}}/>
      <SinglePart category={current}/>
    </LayoutWrapper>
  );
};

export default Detail;