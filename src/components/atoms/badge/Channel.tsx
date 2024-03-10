import React from 'react';
import styled from 'styled-components';
import Atoms from '..';

const Block = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #9c9c9c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ChannelProps {
  a?: any
}

const Channel: React.FC<ChannelProps> = () => {
  return (
    <Block>
      <Atoms.Icon.Discord />
    </Block>
  );
}

export default Channel;