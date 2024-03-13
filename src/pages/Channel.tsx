import React from 'react';
import styled from 'styled-components';
import * as Template from '../components/templates';

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Channel = () => {
  return (
    <Block>
      <Template.Nav />
      <Template.ChannelBar />
    </Block>
  )
};

export default Channel;