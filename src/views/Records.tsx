import React from 'react';
import Layout from '../components/Layout';
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
    <Layout>
      <LayoutWrapper>
        <RecordsSection/>
        <HeaderSection/>
      </LayoutWrapper>
    </Layout>
  );
}

export default Records;