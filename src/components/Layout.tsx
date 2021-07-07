import React from 'react';
import {Nav} from './Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;


const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;