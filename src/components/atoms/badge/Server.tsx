import React from 'react';
import styled from 'styled-components';
import Atoms from '..';

const Block = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #343434;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Server = () => {
  return (
    <Block>
      <Atoms.Icon.Discord />
    </Block>
  );
}

export default Server;