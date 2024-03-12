import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { modalHandler } from '../../../atom'

const Block = styled.div`
  width: 100%;
  height: 100%;
`

const InfoBlock = styled.div`
  width: 440px;
  height: 200px;
  background-color: #424242;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

const InfoTextBlock = styled.div`
  color: #e6e6e6;
  font-weight: bold;

  h2 {
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 8px;
  }
`

const ButtonBlock = styled.div`
  margin-bottom: 0;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #4c58d3;
  border-radius: 8px;
  font-weight: bold;
  color: #e6e6e6;

  &:hover {
    background-color: #4752c4;
    cursor: pointer;
  }
`

const PasswordFind = () => {
  const [modal, setModal] = useRecoilState(modalHandler);

  const passwordModalActiveHandler = () => {
    setModal({ ...modal, password: !modal.password });
  }

  return (
    <>
      {modal.password ? (
        <Block>
          <InfoBlock>
            <InfoTextBlock>
              <h2>이메일로 전송완료</h2>
              <h4>Email: asdf@asdf.com</h4>
              <h4>이메일을 확인해주세요</h4>
            </InfoTextBlock>
            <ButtonBlock onClick={passwordModalActiveHandler}>
              <Button>확인</Button>
            </ButtonBlock>
          </InfoBlock>
        </Block>)
        :
        null
      }
    </>
  )
}

export default PasswordFind;