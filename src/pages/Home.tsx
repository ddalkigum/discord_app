import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import * as Template from '../components/templates';

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
      {roomId ? (
        <Template.Chat />
      ) : null}
    </Block>
  );
}

export default Home;