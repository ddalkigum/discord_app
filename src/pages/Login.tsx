import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a2a2a2;
`

const LoginBlock = styled.div`
  width: 800px;
  height: 400px;
  background-color: #313131;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 2;
  gap: 8px;

  h2 {
    color: #e8e8e8;
  }

  h4 {
    color: #a0a0a0;
    font-weight: 500;
  }
`

const SupportBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`

const Login = () => {
  return (
    <Block>
      <LoginBlock>
        <MainBlock>
          <h2>돌아오신 것을 환영해요!</h2>
          <h4>다시 만나다니 너무 반가워요!</h4>
        </MainBlock>
        <SupportBlock>QR</SupportBlock>
      </LoginBlock>
    </Block>
  )
}

export default Login;