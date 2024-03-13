import React, { useState } from 'react';
import styled from 'styled-components';
import { loginResponse } from '../../lib/api/auth';
import { useRecoilState } from 'recoil';
import { modalHandler } from '../../atom';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

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
  outline: ${props => props.className === 'valid' ? null : 'red solid 1px'};
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
    cursor: pointer;

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
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [modal, setModal] = useRecoilState(modalHandler);

  const handleEmailInputChange = (e) => {
    if (!validEmail) setValidEmail(true);
    setEmail(e.target.value)
  }

  const handlePasswordInputChange = (e) => {
    if (!validPassword) setValidPassword(true);
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    const isEmailPattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!isEmailPattern) {
      toast.warn('이메일 형식이 아닙니다')
      return setValidEmail(false);
    }

    const isPasswordPattern = password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)
    if (!isPasswordPattern) return setValidPassword(false);

    try {
      await loginResponse(email, password);
      navigate('/home')
    } catch (error) {
      const errorResult = error.response?.data?.result;
      if (errorResult?.message === 'Does not exist user') {
        toast.warn('이메일이 올바르지 않습니다')
        return setValidEmail(false);
      }

      if (errorResult?.message === 'Incorrect password') {
        toast.warn('비밀번호가 다릅니다')
        return setValidPassword(false);
      }

      alert('현재 이용할 수 없습니다')
    }

    // page 넘김
  }

  const handleEnter = async (e) => {
    if (e.code !== 'Enter') return;

    const isEmailPattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!isEmailPattern) {
      toast.warn('이메일 형식이 아닙니다')
      return setValidEmail(false);
    }

    if (password.trim() === '') {
      toast.warn('비밀번호를 입력해주세요')
      return setValidPassword(false);
    }

    const isPasswordPattern = password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)
    if (!isPasswordPattern) return setValidPassword(false);

    try {
      await loginResponse(email, password);
      navigate('/home')
    } catch (error) {
      const errorResult = error.response?.data?.result;
      if (errorResult?.message === 'Does not exist user') {
        toast.warn('이메일이 올바르지 않습니다')
        return setValidEmail(false);
      }

      if (errorResult?.message === 'Incorrect password') {
        toast.warn('비밀번호가 다릅니다')
        return setValidPassword(false);
      }

      alert('현재 이용할 수 없습니다')
    }

  }

  const handleFindPasswordModal = () => {
    setModal({ ...modal, password: !modal.password });
  }

  const handleSignupModal = () => {
    setModal({ ...modal, signup: !modal.signup })
  }

  return (
    <Block>
      <IdBlock>
        <h6>이메일 또는 전화번호 </h6>
        <Input
          type='text'
          value={email}
          onChange={handleEmailInputChange}
          onKeyDown={handleEnter}
          className={validEmail ? 'valid' : 'invalid'}
        ></Input>
      </IdBlock>
      <PasswordBlock>
        <h6>비밀번호</h6>
        <Input
          type='password'
          value={password}
          onChange={handlePasswordInputChange}
          onKeyDown={handleEnter}
          className={validPassword ? 'valid' : 'invalid'}
        ></Input>
      </PasswordBlock>
      <LoginHelpBlock>
        <h5 onClick={handleFindPasswordModal}>
          비밀번호를 잊으셨나요?
        </h5>
      </LoginHelpBlock>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <LoginHelpBlock>
        <h4>계정이 필요한가요?</h4>
        <h5 onClick={handleSignupModal}>가입하기</h5>
      </LoginHelpBlock>
    </Block>
  )
}

export default Login;