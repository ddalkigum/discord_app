import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/:serverId/:channelId' Component={Home} />
      </Routes>
    </Router>
  )
}

export default AppRouter;