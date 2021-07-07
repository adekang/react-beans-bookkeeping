import React from 'react';
import Layout from '../components/Layout';
import SelectedPart from '../components/Charts/SelectedPart';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  margin: 16px 0;
`;

function Charts() {
  return (
    <Layout>
      <H1>统计</H1>
      <SelectedPart/>
    </Layout>
  );
}

export default Charts;