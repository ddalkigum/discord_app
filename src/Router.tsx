import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Channel from './pages/Channel';
import Login from './pages/Login';
import Home from './pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/home/:roomId?' Component={Home} />
        <Route path='/channel/:serverId/:channelId' Component={Channel} />
      </Routes>
    </Router>
  )
}

export default AppRouter;