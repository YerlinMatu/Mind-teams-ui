import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups2Icon from '@mui/icons-material/Groups2';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from '@mui/icons-material/Group';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import { Link } from 'react-router-dom';

const DASHBOARD_ROUTE = '/dashboard';
const ACCOUNTS_ROUTE = '/accounts';
const TEAMS_ROUTE = '/teams';
const MOVEMENTS_ROUTE = '/movements';
const USERS_ROUTE = '/users';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={DASHBOARD_ROUTE}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to={ACCOUNTS_ROUTE}>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Accounts" />
    </ListItemButton>
    <ListItemButton component={Link} to={TEAMS_ROUTE}>
      <ListItemIcon>
        <Groups2Icon />
      </ListItemIcon>
      <ListItemText primary="Teams" />
    </ListItemButton>
    <ListItemButton component={Link} to={MOVEMENTS_ROUTE}>
      <ListItemIcon>
        <MoveUpIcon />
      </ListItemIcon>
      <ListItemText primary="Movements" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div">
    </ListSubheader>
    <ListItemButton component={Link} to={USERS_ROUTE}>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
  </React.Fragment>
);
