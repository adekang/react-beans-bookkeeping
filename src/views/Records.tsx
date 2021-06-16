import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/Records/HeaderSection';
import RecordsSection from '../components/Records/RecordsSection';


const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;

`;


function Records() {


  return (
    <LayoutWrapper>
      <RecordsSection/>
      <HeaderSection/>
    </LayoutWrapper>
  );
}

export default Records;