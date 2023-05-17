import { createTheme } from "@mui/material";

export const drawerWidth: number = 280;
export const API_URL = "";
export const ACCESS_TOKEN = '@access-token';

export const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#ff0000cf',
      contrastText: '#fff',
    },
    secondary: {
      main: '#333862',
      contrastText: '#fff',
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});