import React from 'react';
import styled from 'styled-components';
import * as Organism from '../organisms';

const BackgroundScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 5;
`

const ModalContext = ({ children }) => {
  return (
    <>
      <BackgroundScreen />
      <Organism.PasswordFind />
      <Organism.Signup />
      {children}
    </>
  )
}

export default ModalContext;