import React from 'react';
import styled from 'styled-components';
import Atoms from '../components/atoms';

const Block = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #000;
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 12px 0 12px 0;
`

const Nav = () => {
  return (
    <Block>
      <Atoms.Badge.Channel />
      <Atoms.Badge.Channel />
      <Atoms.Badge.Channel />
      <Atoms.Badge.Channel />
      <Atoms.Badge.Channel />
      <Atoms.Badge.Channel />
      <Atoms.Badge.Channel />
    </Block>
  )
}

export default Nav;