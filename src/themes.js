import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#57c474',
    },
    secondary: {
        main: '#648368',
    },
    background: {
        paper: '#d3e8d2', 
        default: '#dde5da'
      },
  },
});

export default theme;