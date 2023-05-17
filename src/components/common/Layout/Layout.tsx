import { Box, Container, CssBaseline, Grid } from "@mui/material";
import Header from "../Header/Header";
import React from "react";
import { drawerWidth, mdTheme } from "../../../constants/constants";
import SidePanel from "../SidePanel/SidePanel";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
    >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header
          toggleDrawer={toggleDrawer}
          open={open}
          theme={mdTheme}
        />
        <SidePanel
          open={open}
          drawerWidth={drawerWidth}
          toggleDrawer={toggleDrawer}
        />
        <Container maxWidth="xl" sx={{ mt: 12, mb: 2 }}>
          <Grid container spacing={4}>
            {children}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}