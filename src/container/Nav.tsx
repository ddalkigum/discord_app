import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Atoms from '../components/atoms';
import Add from '@mui/icons-material/Add';
import * as Atom from '../components/atoms/icon';
import { useNavigate } from 'react-router';
import { getServerListResponse } from '../lib/api/server';
import { useRecoilState } from 'recoil';
import { modalHandler } from '../atom';

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
  const [modal, setModal] = useRecoilState(modalHandler);
  const [participateServerList, setParticipateServerList] = useState([]);

  useEffect(() => {
    getServerListResponse().then((data) => {
      setParticipateServerList(data.result);
    })
  }, [])

  const handleHome = () => {
    navigate('/home')
  }

  const handleServerChange = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/channel/${e.currentTarget.id}`)
  }

  const handleCreateServerModal = () => {
    setModal({ ...modal, createServer: !modal.createServer });
  }

  return (
    <Block>
      <HomeIconBlock onClick={handleHome}>
        <Atoms.Icon.Discord color='white' />
      </HomeIconBlock>
      <ServerBlock>
        {participateServerList.map((participate, index) => {
          return (
            <a key={`server_${index}`} data-tooltip-id='tooltip' data-tooltip-content={participate.server.name}>
              <ServerIconBlock onClick={handleServerChange} id={participate.server.id}>
                <Atoms.Badge.Channel />
              </ServerIconBlock>
            </a>
          )
        })}
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