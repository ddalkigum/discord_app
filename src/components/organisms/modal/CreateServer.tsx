import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalHandler } from '../../../atom';
import { createServerResponse } from '../../../lib/api/server';
import { toast } from 'react-toastify';

const Block = styled.div`
  width: 100%;
  height: 100%;
`

const InnerBlock = styled.div`
  width: 440px;
  height: 200px;
  background-color: #424242;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

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
  margin-bottom: 0;
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

const CreateServer = () => {
  const [modal, setModal] = useRecoilState(modalHandler);
  const [serverName, setServerName] = useState('');

  const handleCreateServer = async () => {
    try {
      await createServerResponse(serverName, 'community');
      setModal({ ...modal, createServer: false });
    } catch (error) {
      toast.error('사용할 수 없습니다')
    }
  }

  const handleInputChange = (e) => {
    setServerName(e.target.value);
  }

  return (
    <>
      {modal.createServer ? (
        <Block>
          <InnerBlock>
            <h2>서버 생성하기</h2>
            <InputBlock>
              <h5>서버이름</h5>
              <Input
                type='text'
                value={serverName}
                onChange={handleInputChange}
              />
              <ButtonBlock>
                <Button onClick={handleCreateServer}>생성하기</Button>
              </ButtonBlock>
            </InputBlock>
          </InnerBlock>
        </Block>
      ) : null}
    </>
  )
}

export default CreateServer;