import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRecoilState } from 'recoil';
import { modalHandler, userHandler } from '../atom';
import { getChatRoomListResponse } from '../lib/api/chat';
import { useNavigate } from 'react-router';

const Block = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #2f2f2f;
  display: flex;
  flex-direction: column;
`

const AddChatBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bdbdbd;
  padding: 20px 12px 8px 12px;

  h5 {
    font-size: 12px;
    font-weight: bold;
  }

  &:hover {
    color: #ebebeb;
  }
`

const AddChatIconBlock = styled.div`
  cursor: pointer;
`

const ChatRoomListBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const ChatRoomItemBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 4px;
  color: #bdbdbd;
  font-size: 14px;

  &:hover {
    background-color: #454545;
  }
`

const UserImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileBlock = styled.div`
  width: 100%;
  height: 52px;
  background-color: #232323;
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
`

const ProfileImageBlock = styled.div``

const ProfileStatusBlock = styled.div`
  h5 {
    color: #e8e8e8;
    margin-bottom: 4px;
  }

  h6 {
    color: #ababab;
  }
`

const SettingBlock = styled.div`
  margin-left: auto;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ababab;

  svg {
    width: 20px;
    cursor: pointer;
    &:hover {
      color: #e8e8e8;
    }
  }
`

const getParticipantNicknameList = (currentUserNickname: string, participantNicknameList: string[]) => {
  return participantNicknameList.map(nickname => {
    if (nickname !== currentUserNickname) {
      return nickname;
    }
  })
}

const HomeBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userHandler);
  const [modal, setModal] = useRecoilState(modalHandler);
  const [chatRoomList, setChatRoomList] = useState([]);

  const handleFindUserModal = () => {
    setModal({ ...modal, findUser: true });
  }

  useEffect(() => {
    getChatRoomListResponse(user.id).then(data => {
      setChatRoomList(data.result);
    })
  }, [])

  const handleChatRoomClick = (e) => {
    navigate(`/home/${e.target.id}`);
  }

  return (
    <Block>
      <AddChatBlock>
        <h5>대화상대</h5>
        <a data-tooltip-id='tooltip' data-tooltip-content='DM 생성'>
          <AddChatIconBlock onClick={handleFindUserModal}>
            <AddIcon
              color='inherit'
            />
          </AddChatIconBlock>
        </a>
      </AddChatBlock>
      <ChatRoomListBlock>
        {chatRoomList.map((chatRoom, index) => {
          return (
            <ChatRoomItemBlock id={chatRoom.id} key={index} onClick={handleChatRoomClick}>
              <UserImage />
              {getParticipantNicknameList(user.nickname, chatRoom.participantNicknameList).map((nickname, index) => {
                return <h4 key={index}>{nickname}</h4>
              })}
            </ChatRoomItemBlock>
          )
        })}
      </ChatRoomListBlock>
      <ProfileBlock>
        <ProfileImageBlock>
          <UserImage />
        </ProfileImageBlock>
        <ProfileStatusBlock>
          <h5>{user.nickname}</h5>
          <h6>오프라인으로 표시</h6>
        </ProfileStatusBlock>
        <SettingBlock>
          <KeyboardVoiceIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </SettingBlock>
      </ProfileBlock>
    </Block>
  )
}

export default HomeBar