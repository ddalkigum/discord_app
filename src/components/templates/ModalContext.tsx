import React from 'react';
import styled from 'styled-components';
import * as Organism from '../organisms';
import { useRecoilValue } from 'recoil';
import { modalHandler } from '../../atom';

const BackgroundScreen = styled.div`
  ${props => props.className === 'active' && `
    width: 100%;
    height: 100vh;
    background-color: #000;
    position: absolute;
    opacity: 0.5;
    z-index: 5;
  `}
`

const ModalContext = ({ children }) => {
  const modal = useRecoilValue(modalHandler);

  const isModalActive = () => {
    return Object.values(modal).some(value => value === true);
  }

  return (
    <>
      <Organism.Modal.PasswordFind />
      <Organism.Modal.Signup />
      <Organism.Modal.CreateServer />
      <Organism.Modal.FindUser />
      <BackgroundScreen className={isModalActive() ? 'active' : 'deactive'} />
      {children}
    </>
  )
}

export default ModalContext;