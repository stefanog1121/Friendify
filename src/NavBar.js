import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes';


function NavBar() {
  let navigate = useNavigate();
  const [selected, setSelected] = React.useState('/');

  const handleNavigation = (event, newPath) => {
    if (newPath !== null) {
      setSelected(newPath);
      navigate(newPath);
    }
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Box style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ToggleButtonGroup 
          value={selected}
          exclusive
          onChange={handleNavigation}
          aria-label="segmented navigation bar"
          style={{
            backgroundColor: '#d3e8d2',
            width: '60vw',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ToggleButton value="/" aria-label="home" style={{flexGrow: 1}}>
            Home
          </ToggleButton>
          <ToggleButton value="/compare" aria-label="compare" style={{flexGrow: 1}}>
            Compare
          </ToggleButton>
          <ToggleButton value="/about" aria-label="about" style={{flexGrow: 1}}>
            About
          </ToggleButton>
        </ToggleButtonGroup>
        </Box>
    </ThemeProvider>
  );
}

export default NavBar;
