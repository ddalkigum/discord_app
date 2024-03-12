import React from 'react';
import styled from 'styled-components';
import Container from '../container';

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #3e3e3e;
`

const Home = () => {
  const [_, origin, roomId] = window.location.pathname.split('/')

  return (
    <Block>
      <Container.Nav />
      <Container.HomeBar />
    </Block>
  );
}

export default Home;