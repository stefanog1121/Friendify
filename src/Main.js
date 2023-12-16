import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './App.css';

function Main() {
    <div className="mainContainer">
        <div className="topTracksContainer">
            <List style={{ maxWidth: 300 }}>
                <ListItem>
                    <ListItemText 
                        primary="Song Title" 
                        secondary="Song Artist" 
                    />
                </ListItem>
            </List>
        </div>
        <div className="topTracksContainer">
        </div>
        <div className="topArtistsContainer">
        </div>
        <div className="recentlyPlayedContainer">
        </div>
    </div>
}

export default Main