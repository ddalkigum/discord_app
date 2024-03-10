import React from 'react';
import styled from 'styled-components';
import Container from '../container';

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
  background-color: #424242;
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
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  gap: 24px;
`

const QrBlock = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;

  img {
    object-fit: contain;
    width: 200px;
    height: 200px;
    border-radius: 8px;
  }
`

const QrSupportBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  h2 {
    color: #dfdfdf;
    margin-bottom: 8px;
  }

  h4 {
    color: #c4c4c4;
    margin-bottom: 4px;
  }
`

const Login = () => {
  return (
    <Block>
      <LoginBlock>
        <MainBlock>
          <h2>돌아오신 것을 환영해요!</h2>
          <h4>다시 만나다니 너무 반가워요!</h4>
          <Container.Login />
        </MainBlock>
        <SupportBlock>
          <QrBlock>
            <img src='LoginQr.png'></img>
          </QrBlock>
          <QrSupportBlock>
            <h2>
              QR 코드로 로그인
            </h2>
            <h4>
              Discord 모바일 맵으로 스캔해
            </h4>
            <h4>바로 로그인하세요.</h4>
          </QrSupportBlock>
        </SupportBlock>
      </LoginBlock>
    </Block>
  )
}

export default Login;