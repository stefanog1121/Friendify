import React, {useState} from 'react';
import { Box, Dialog, DialogTitle, Divider } from '@mui/material';


function Login() {
    const [open, setOpen] = useState(true)

    const onClose = () => {
      setOpen(false);
    };
    
    return (
      <Dialog 
        open={open} 
        onClose={onClose}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '24px',
            width: '60%',
            height: '60%',
            maxWidth: '500px',
            maxHeight: '500px',
          }
        }}>
        <DialogTitle sx={{margin: '1'}}>Welcome to Friendify!</DialogTitle>
        <Divider />
        <Box style={{
          justifyContent: "center",
          textAlign: "center"
        }}>
          <h3>In order to analyze your listening history, please sign into Spotify below.</h3>
        </Box>
      </Dialog>
    )

}
export default Login;