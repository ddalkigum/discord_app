import React, { useState } from 'react';
import styled from 'styled-components';
import { signupResponse } from '../../../lib/api/auth';
import { useRecoilState } from 'recoil';
import { modalHandler } from '../../../atom';

const Block = styled.div`
  width: 100%;
  height: 100%;
`

const SignupBlock = styled.div`
  width: 400px;
  position: absolute;
  background-color: #424242;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
  outline: ${props => props.className === 'valid' ? null : 'red solid 1px'};
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

const Signup = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [modal, setModal] = useRecoilState(modalHandler);

  const handleEmailInputChange = (e) => {
    if (!validEmail) setValidEmail(true);
    setEmail(e.target.value);
  }

  const handleNicknameInputChange = (e) => {
    setNickname(e.target.value);
  }

  const handlePasswordInputChange = (e) => {
    if (!validPassword) setValidPassword(true);
    setPassword(e.target.value);
  }

  const handleSignup = async () => {
    const isEmailPattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!isEmailPattern) return setValidEmail(false);

    const isPasswordPattern = password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)
    if (!isPasswordPattern) return setValidPassword(false);

    try {
      await signupResponse(email, password, nickname);
      window.location.pathname = '/home'
      return;
    } catch (error) {
      const errorResult = error.response?.data?.result;
      if (errorResult.message === 'Already exist user') {
        alert('이미 존재하는 이메일입니다');
        return setValidEmail(false);
      }

      alert('현재 이용할 수 없습니다')
    }
  }

  const handleSignupModal = () => {
    setModal({ ...modal, signup: !modal.signup });
  }

  return (
    <>
      {modal.signup ? (
        <Block>
          <SignupBlock>
            <h2>계정 만들기</h2>
            <InputBlock>
              <h5>이메일</h5>
              <Input
                type='text'
                value={email}
                onChange={handleEmailInputChange}
                className={validEmail ? 'valid' : 'invalid'}
              />
            </InputBlock>
            <InputBlock>
              <h5>닉네임</h5>
              <Input
                type='text'
                value={nickname}
                onChange={handleNicknameInputChange}
                className='valid'
              />
            </InputBlock>
            <InputBlock>
              <h5>비밀번호</h5>
              <Input
                type='password'
                value={password}
                onChange={handlePasswordInputChange}
                className={validPassword ? 'valid' : 'invalid'}
              />
            </InputBlock>
            <ButtonBlock>
              <Button onClick={handleSignup}>계속하기</Button>
            </ButtonBlock>
            <BackBlock>
              <h5 onClick={handleSignupModal}>로그인하러 가기</h5>
            </BackBlock>
          </SignupBlock>
        </Block>
      ) : null
      }
    </>

  )
}

export default Signup;