import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import styled from 'styled-components';
import { connectChannelRoom, sendChat } from '../lib/api/chat';
import { useLocation } from 'react-router';
import * as Icon from '../components/atoms/icon';

const Block = styled.div`
  width: 100%;
  background-color: #000;
  opacity: 0.7;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const NavBlock = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px 12px 8px 12px;
  display: flex;
  align-items: center;
`

const NavItem = styled.span`
  margin-left: 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`

const NavUnderLine = styled.div`
  width: 100%;
  height: 10px;
  background-color: #000;
  opacity: 0.95;
`

const ChatHistoryBlock = styled.div`
  width: 100%;
  height: 90%;
`

const ChatTextBlock = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  background-color: #000;
  opacity: 0.6;
`

const ChatInput = styled.input`
  
`

const Chat = () => {
  const location = useLocation();
  const [_, serverId, channelId] = location.pathname.split('/');
  const [chatSocket, setChatSocket] = useState<Socket>(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connectChannelRoom(serverId, channelId).then(() => console.log('send complete'))
    const chatSocketInstance = io(`http://localhost:3001/${serverId}/${channelId}`, { timeout: 2000 });

    chatSocketInstance.on('connect', () => {
      console.log('Connect!')
    })

    chatSocketInstance.on('chatMessage', (message) => console.log(message));

    setChatSocket(chatSocketInstance);

    return () => {
      if (chatSocketInstance) {
        chatSocketInstance.disconnect();
      }
    }
  }, []);

  const handleSendMessage = async () => {
    if (chatSocket && message.trim() !== '') {
      await sendChat(serverId, channelId, 'senderId', message);
      setMessage('');
    }
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }

  const handleDisconnect = (e) => {
    chatSocket.disconnect();
  }

  return (
    <Block>
      <NavBlock>
        <Icon.HashTag width={20} />
        <NavItem>Channel 1</NavItem>
      </NavBlock>
      <NavUnderLine />
      <ChatHistoryBlock>
        <ul>
          {chatHistory.map((msg, index) => (
            <li key={index}>{msg.text}</li>
          ))}
        </ul>
      </ChatHistoryBlock>
      <ChatTextBlock>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={handleDisconnect}>Disconnect</button>
      </ChatTextBlock>
    </Block>
  )
}

export default Chat;