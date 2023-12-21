import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes'; 
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Main() {
    return (
        <ThemeProvider theme={theme}>
            <div className="mainContainer">
                <div className="contentTracksContainer">
                    <div className="userContentContainer">
                        <img 
                            className="userProfileImg"
                            src="https://static.planetminecraft.com/files/banners/minecraft_banner_16v6E6o1k1m.png"
                            alt="User Profile"
                        />
                        <h3>User Name</h3>
                    </div>
                    <div className="topTracksContainer">
                        <h1>Top Tracks</h1>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                            <List style={{ maxWidth: 500 }}>
                                <ListItem>
                                    <ListItemText 
                                        primary="Song Title" 
                                        secondary="Song Artist" 
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText 
                                        primary="Song Title" 
                                        secondary="Song Artist" 
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText 
                                        primary="Song Title" 
                                        secondary="Song Artist" 
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </div>
                    <div className="topArtistsContainer">
                        {/* Content for topArtistsContainer */}
                    </div>
                    <div className="recentlyPlayedContainer">
                        {/* Content for recentlyPlayedContainer */}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Main;
