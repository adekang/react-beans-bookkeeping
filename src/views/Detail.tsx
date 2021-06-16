import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import NavBar from '../components/Money/NavBar';
import SinglePart from '../components/Money/SinglePart';
import SelectPart from '../components/Money/SelectPart';
import TotalSection from '../components/Money/TotalSection';
import DatePart from '../components/Money/DatePart';

const LayoutWrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


function Detail() {
  return (
    <LayoutWrapper>

      <NavBar/>

      <TotalSection/>

      <SelectPart/>

      <DatePart/>

      <SinglePart/>

    </LayoutWrapper>
  );
}

export default Detail;