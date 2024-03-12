import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { Tooltip } from 'react-tooltip';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <RecoilRoot>
      <title>Discord</title>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        closeOnClick
        theme='dark'
        pauseOnHover
      />
      <Tooltip id='tooltip' />
      <App />
    </RecoilRoot>
  )
} else {
  throw new Error('root file doesn not exist');
}