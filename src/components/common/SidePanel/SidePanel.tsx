import { Button, Divider, List, Toolbar } from "@mui/material";
import { mainListItems, secondaryListItems } from './ListItems';

// @common
import Logo from "../Logo/Logo";
import Drawer from "./Drawer";

interface Props {
  open: boolean;
  drawerWidth: number;
  toggleDrawer?: () => void;
}

const SidePanel = ({ open, drawerWidth, toggleDrawer }: Props) => {
  return (
    <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#dd3643',
          px: [1],
          border: 'none'
        }}
      >
        <Logo isWhite={true} />
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
      <List component="nav">
        <Button
          size="large"
          onClick={toggleDrawer}
        >
          {open ? 'Close' : 'Open'}
        </Button>
      </List>
  </Drawer>
  )
}

export default SidePanel;