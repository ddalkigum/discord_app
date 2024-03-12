import React, { useEffect } from 'react';
import AppRouter from './Router';
import GlobalStyle from './GlobalStyle';
import { loginCheckResponse } from './lib/api/auth';
import { useRecoilState } from 'recoil';
import { userHandler } from './atom';
import ModalContext from './components/templates/ModalContext';

function App() {
  const [user, setUser] = useRecoilState(userHandler);

  useEffect(() => {
    if (window.location.pathname === '/login') return;

    loginCheckResponse().then(data => {
      if (!data.success) {
        window.location.pathname = '/login'
        return;
      }

      return setUser({
        id: data.result.id,
        email: data.result.email,
        nickname: data.result.nickname,
        createdAt: data.result.createdAt
      });
    }).catch(error => {
      window.location.pathname = '/login'
      return;
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <ModalContext>
        <AppRouter />
      </ModalContext>
    </>
  );
}

export default App;
