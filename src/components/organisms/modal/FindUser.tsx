import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { modalHandler, userHandler } from '../../../atom';
import { findUserResponse } from '../../../lib/api/user';
import { createChatRoomResponse } from '../../../lib/api/chat';

const Block = styled.div`
  width: 100%;
  height: 100%; 
`

const InnerBlock = styled.div`
  width: 440px;
  height: 600px;
  background-color: #424242;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  h2 {
    color: #e6e6e6;
    font-weight: bold;
  }
`

const InputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #e6e6e6;
  gap: 8px;
`

const Input = styled.input`
  background-color: #1a1a1a;
  width: 100%;
  color: #e6e6e6;
  padding: 12px 8px 12px 8px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`

const ButtonBlock = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 12px;
`

const Button = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4c58d3;
  border-radius: 8px;
  font-weight: bold;
  color: #e6e6e6;

  &:hover {
    background-color: #4752c4;
    cursor: pointer;
  }
`

const BackBlock = styled.div`
  width: 100%;

  h5 {
    font-size: 12px;
    width: fit-content;
    font-weight: 400;
    color: #00A8FC;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid #00A8FC;
    }
  }
`

const UserBlock = styled.div`
  width: 100%;
  height: 300px;
  background-color: #5b5b5b;
  border-radius: 8px;
`

const UserItemBlock = styled.div`
  cursor: pointer;
  color: #e6e6e6;
  padding: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;

  ${props => props.className === 'active' && `
    background-color: #8c8c8c;
  `}

  &:hover {
    background-color: #8c8c8c;
  }
`

const FriendImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FindUser = () => {
  const [modal, setModal] = useRecoilState(modalHandler);
  const currentUser = useRecoilValue(userHandler);
  const [nickname, setNickname] = useState('');
  const [findUserList, setFindUserList] = useState([]);
  const [selectUserId, setSelectUserId] = useState('');

  const handleInputChange = (e) => {
    setNickname(e.target.value)
    debouncedSearch(e.target.value)
  }

  const handleBack = () => {
    setModal({ ...modal, findUser: false });
  }

  const debouncedSearch = useCallback(debounce(async (query) => {
    const response = await findUserResponse(query);
    setFindUserList(response.result);
  }, 500), [])

  const handleAddDmUser = async () => {
    await createChatRoomResponse(currentUser.id, selectUserId);
    setModal({ ...modal, findUser: false });
  }

  const handleSelectUser = (e) => {
    setSelectUserId(e.target.id);
  }

  return (
    <>
      {modal.findUser ? (
        <Block>
          <InnerBlock>
            <h2>DM 상대 찾기</h2>
            <InputBlock>
              <h5>유저 닉네임</h5>
              <Input
                type='text'
                value={nickname}
                onChange={handleInputChange}
              />
            </InputBlock>
            <UserBlock>
              {findUserList.map((user, index) => {
                return (
                  currentUser.id !== user.id ?
                    <UserItemBlock key={index} id={user.id} className={selectUserId === user.id ? 'active' : 'deactive'} onClick={handleSelectUser}>
                      <FriendImage />
                      <h5>{user.nickname}</h5>
                    </UserItemBlock> : null
                )
              })}
            </UserBlock>
            <ButtonBlock>
              <Button onClick={handleAddDmUser}>추가하기</Button>
            </ButtonBlock>
            <BackBlock>
              <h5 onClick={handleBack}>돌아가기</h5>
            </BackBlock>
          </InnerBlock>
        </Block>

      ) : null}
    </>
  )
}

export default FindUser;