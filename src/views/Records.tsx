import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/Records/HeaderSection';
import RecordsSection from '../components/Records/RecordsSection';


const LayoutWrapper = styled.div`
  height: 100vh;
  max-width: 414px;
  display: flex;
  flex-direction: column;

`;


function Records() {
  return (
    <LayoutWrapper>
      <HeaderSection/>
      <RecordsSection/>
    </LayoutWrapper>
  );
}

export default Records;