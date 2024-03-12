import React, { useState } from 'react';
import styled from 'styled-components';
import Atoms from '../components/atoms';
import Add from '@mui/icons-material/Add';
import * as Atom from '../components/atoms/icon';
import { useNavigate } from 'react-router';
import { createServerResponse } from '../lib/api/server';

const Block = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0 12px 0;
  gap: 12px;
`

const ServerBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  
`

const ServerIconBlock = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const CreateServerBlock = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #343434;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #53a053;
  cursor: pointer;

  &:hover {
    color: #e6e6e6;
    border-radius: 12px;
    background-color: #53a053;
  }
`

const HomeIconBlock = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background-color: #4c58d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Nav = () => {
  const navigate = useNavigate();
  const [createServerModal, setCreateServerModal] = useState(false);

  const handleHome = () => {
    navigate('/home')
  }

  const handleCreateServerModal = () => {
    setCreateServerModal(true);
  }

  const handleCreateServer = async () => {
    await createServerResponse('', 'community');
  }

  return (
    <Block>
      <HomeIconBlock onClick={handleHome}>
        <Atoms.Icon.Discord color='white' />
      </HomeIconBlock>
      <ServerBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
        <ServerIconBlock>
          <Atoms.Badge.Channel />
        </ServerIconBlock>
      </ServerBlock>
      <a data-tooltip-id='tooltip' data-tooltip-content='서버 생성하기'>
        <CreateServerBlock onClick={handleCreateServerModal}>
          <Add
            fontSize='medium'
          />
        </CreateServerBlock>
      </a>
    </Block>
  )
}

export default Nav;