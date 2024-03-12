import React from 'react';
import styled from 'styled-components';

const Block = styled.div``

type ChatProps = {
  serverId: string,
  channelId: string,
}

const Chat = ({ serverId, channelId }: ChatProps) => {
  return (
    <Block></Block>
  )
}

export default Chat;