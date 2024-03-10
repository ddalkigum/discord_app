import React from 'react';
import styled from 'styled-components';
import * as Icon from '../components/atoms/icon';

const Block = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
  padding: 20px 8px 20px 8px;
`

const ChannelBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const ChannelNameBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 4px 2px 4px;
  border-radius: 8px;
  color: #dedede;
  font-size: 14px;

  &:hover {
    background-color: #616161;
  }
`

const ChannelBar = () => {
  return (
    <Block>
      <ChannelBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 1</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 2</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 3</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 4</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 5</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 6</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 7</ChannelNameBlock>
        <ChannelNameBlock><Icon.HashTag color="#dedede" width={14} />Channel 8</ChannelNameBlock>
      </ChannelBlock>
    </Block>
  )
}

export default ChannelBar;
