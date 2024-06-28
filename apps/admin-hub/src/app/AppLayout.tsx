import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import Nav from './components/nav/Nav';

function AppLayout() {
  return (
    <div id="root-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <AppWrapper>
          <Outlet />
      </AppWrapper>
    </div>
  );
}

export default AppLayout;
