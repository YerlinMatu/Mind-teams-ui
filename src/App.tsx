import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard/Dashboard';
import Login from './components/pages/Login/Login';
import Accounts from './components/pages/Accounts/Accounts';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
import Teams from './components/pages/Teams/Teams';
import Movements from './components/pages/Movements/Movements';
import Users from './components/pages/Users/Users';
import LayoutContent from './components/common/Layout/Layout';
import { mdTheme } from './constants/constants';

function App() {
  return (
    <React.Fragment>
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/dashboard'} element={
            <LayoutContent>
              <Dashboard />
            </LayoutContent>
          }>
          </Route>
          <Route path={'/'} element={<Login />} />
          <Route path={'/forgot-password'} element={<ForgotPassword />} />
          <Route path={'/accounts'} element={
            <LayoutContent>
              <Accounts />
            </LayoutContent>
            }
          />
          <Route path={'/teams'} element={
            <LayoutContent>
              <Teams />
            </LayoutContent>
            } 
          />
          <Route path={'/movements'} element={
            <LayoutContent>
              <Movements />
            </LayoutContent>
            } 
          />
          <Route path={'/users'} element={
            <LayoutContent>
              <Users />
            </LayoutContent>
            } 
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
