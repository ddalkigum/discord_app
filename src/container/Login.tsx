import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  color: #f5f5f5;
`

const IdBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`

const PasswordBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
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

const LoginHelpBlock = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  font-size: 12px;
  gap: 8px;

  h5 {
    font-size: 12px;
    width: fit-content;
    font-weight: 400;
    color: #00A8FC;
    &:hover {
      border-bottom: 1px solid #00A8FC;
    }
  }
`


const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #4c58d3;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 12px;

  &:hover {
    background-color: #4752c4;
    cursor: pointer;
  }
`

const Login = () => {
  return (
    <Block>
      <IdBlock>
        <h6>이메일 또는 전화번호 </h6>
        <Input></Input>
      </IdBlock>
      <PasswordBlock>
        <h6>비밀번호</h6>
        <Input></Input>
      </PasswordBlock>
      <LoginHelpBlock>
        <h5>
          비밀번호를 잊으셨나요?
        </h5>
      </LoginHelpBlock>
      <LoginButton>로그인</LoginButton>
      <LoginHelpBlock>
        <h4>계정이 필요한가요?</h4>
        <h5>가입하기</h5>
      </LoginHelpBlock>
    </Block>
  )
}

export default Login;