import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';


function NavBar() {
  const theme = useTheme();
  let navigate = useNavigate();
  const [selected, setSelected] = React.useState('/');

  const handleNavigation = (event, newPath) => {
    if (newPath !== null) {
      setSelected(newPath);
      navigate(newPath);
    }
  };

  return (
    <Box style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.background.paper,
      padding: 10,
      marginRight: '18vw',
      marginLeft: '18vw',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    }}>
      <ToggleButtonGroup 
        value={selected}
        exclusive
        onChange={handleNavigation}
        style={{
          width: '50vw',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          font: 'Montserrat',
          border: '0.5px solid',
        }}
      >
        <ToggleButton value="/" aria-label="home" style={{flexGrow: 1, textTransform: 'none', backgroundColor: 'white'}}>
          Home
        </ToggleButton>
        <ToggleButton value="/compare" aria-label="compare" style={{flexGrow: 1, textTransform: 'none', backgroundColor: 'white'}}>
          Compare
        </ToggleButton>
        <ToggleButton value="/about" aria-label="about" style={{flexGrow: 1, textTransform: 'none', backgroundColor: 'white'}}>
          About
        </ToggleButton>
      </ToggleButtonGroup>
      </Box>
  );
}

export default NavBar;
