import React from 'react';
import Layout from '../components/Layout';
import SelectedPart from '../components/Charts/SelectedPart';
import NavPart from '../components/Charts/NavPart';

function Charts() {
  return (
    <Layout>
      <NavPart/>
      <SelectedPart/>
    </Layout>
  );
}

export default Charts;