import React from 'react';
import styled from 'styled-components';
import Container from '../container';

const Block = styled.div`
  height: 100%;
  display: flex;
`;

const Home = () => {
  return (
    <Block>
      <Container.Nav />
      <Container.ChannelBar />
      <Container.Chat />
    </Block>
  )
};

export default Home;