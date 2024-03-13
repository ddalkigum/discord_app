import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { disconnectChatRoom, getChatHistory, getRoomUserResponse, sendMessageToRoom } from '../../lib/api/chat';
import { io } from 'socket.io-client';
import { getDatetimeToKor } from '../../util/date';

const Block = styled.div`
  width: calc(100% - 320px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const TopNav = styled.div`
  width: 100%;
  position: fixed;
`

const ChatUserBlock = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 20px 0 20px;
  gap: 12px;

  h4 {
    font-weight: bold;
    color: #e6e6e6;
  }
`

const TopNavUserImage = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const UserImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 1px;
  background-color: #262626;
`

const ChatHistoryBlock = styled.div`
  width: 100%;
  margin-top: 61px;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`

const ChatItemBlock = styled.div`
  display: flex;
  gap: 12px;
`

const ChatTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #e6e6e6;

  span {
    font-size: 14px;
  }
`

const ChatInfoBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  
  h5 {
    font-size: 14px;
  }

  h6 {
    color: #acb6d9;
    font-weight: bold;
  }
`

const ChatInputBlock = styled.div`
  width: calc(100% - 360px);
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #4d4d55;
  margin-top: auto;
  padding: 12px;
  border-radius: 24px;
  position: fixed;
  bottom: 20px;

  input {
    width: 100%;
    outline: none;
    background-color: #4d4d55;
    color: #e6e6e6;
  }
`

const Chat = () => {
  const [_, __, roomId] = window.location.pathname.split('/');
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [chatList, setChatList] = useState([]);
  const scrollRef = useRef<HTMLDivElement>();

  useEffect(() => {
    getChatHistory(roomId).then(data => {
      setChatList(data.result);
    })

    const chatSocketInstance = io(`http://localhost:3001`);

    setSocket(chatSocketInstance);

    chatSocketInstance.on('connect', () => {
      console.log('===== Connect =====');
    })

    chatSocketInstance.on(roomId, (data) => {
      setChatList(chatList.concat([data]))
    })

    chatSocketInstance.on('disconnect', () => {
      console.log(`Disconnect, roomId: ${roomId}`)
    })

    return () => {
      chatSocketInstance.disconnect();
    }
  }, [roomId])

  const socketDisconnect = (e) => {
    e.preventDefault();
    if (socket) socket.disconnect();
    e.returnValue = '';
  }

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', socketDisconnect);
    })();

    return (() => {
      window.removeEventListener("beforeunload", socketDisconnect);
    })
  }, [])

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList])

  const sendMessage = () => {
    if (socket && message.trim() !== '') {
      sendMessageToRoom(roomId, message).then(data => {
        const newChat = data.result;
        setChatList(chatList.concat([newChat]));
      })
      setMessage('')
    }
  }

  const sendChat = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <Block>
      <TopNav>
        <ChatUserBlock>
          <TopNavUserImage />
          <h4>asdf</h4>
        </ChatUserBlock>
        <Line />
      </TopNav>
      <ChatHistoryBlock ref={scrollRef}>
        {chatList.map((chat, index) => {
          return (
            <ChatItemBlock key={index}>
              <UserImage id={chat.senderId} />
              <ChatTextBlock>
                <ChatInfoBlock>
                  <h5>{chat.sender.nickname}</h5>
                  <h6>{getDatetimeToKor(chat.createdAt)}</h6>
                </ChatInfoBlock>
                <span>{chat.content}</span>
              </ChatTextBlock>
            </ChatItemBlock>
          )
        })}
        <ChatInputBlock>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={sendChat}
          />
        </ChatInputBlock>
      </ChatHistoryBlock>
    </Block>
  )
}

export default Chat;