import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Divider
} from "@mui/material"

const song = {name:'Name', artist:'Artist', length:390, cover:'https://cdns-images.dzcdn.net/images/cover/c26e4c98fcf7ba68c2a77668f092ac08/350x350.jpg'};
const songs= [song, song, song, song, song];

function Avatar() {
    return (
        <Box style={{
            display: 'flex',
            fontWeight: 'bold'
        }}>
            <img
                className="avatar"
                src="https://static.planetminecraft.com/files/banners/minecraft_banner_16v6E6o1k1m.png"
                alt="User Profile"
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%'
                }}
            />
            <Box style={{marginLeft:'10px'}}>
                <h2>User Name</h2>
            </Box>
        </Box>
    );
  }

  function TracksListing({discog}) {
    return (
        <Box sx={{
            width: '80%'
        }}>
            <List>
                {discog.map((song, index) => (
                    <React.Fragment key={index}>
                        <ListItem >
                            <ListItemAvatar sx={{
                                marginRight: 2
                            }}>
                                <img 
                                    src={song.cover}
                                    alt={song.name}
                                    variant='square'
                                    width='56px'
                                />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={song.name}
                                secondary={song.artist}
                            />
                            <ListItemSecondaryAction>
                                {Math.floor(song.length / 60)}:{('0' + song.length % 60).slice(-2)}
                            </ListItemSecondaryAction>
                        </ListItem>
                        {index !== discog.length - 1 && <Divider />} 
                    </React.Fragment>
                ))}
            </List>
        </Box>
    )
  }


function Main() {
    const theme = useTheme();
    return (
        <Box>
            <Box className="topBar" style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            }}>
                <Box style={{
                    backgroundColor: theme.palette.background.paper,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: '10px',
                    marginLeft: '5px',
                    marginRight: '5px',
                    borderRadius: 24,
                    width: '60vw'
                    }}>
                    <Box style={{marginTop: '10px',}}>
                        <Avatar />
                    </Box>
                </Box>
            </Box>
            <Box className="recentsTopTracks" style={{
                display: 'flex',
                width: '100%',
                marginTop: '10px',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box className="recentlyPlayed">
                    <Box style={{
                        flexGrow: '1',
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 24,
                        marginRight: '5px',
                        marginLeft: '5px',
                        width: '30vw'
                    }}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <h1>Recently Played</h1>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TracksListing discog={(songs)} />
                        </Box>
                    </Box>
                </Box>
                <Box className="topTracks">
                    <Box style={{
                        flexGrow: '1',
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 24,
                        marginRight: '5px',
                        marginLeft: '5px',
                        width: '30vw'
                    }}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <h1>Top Tracks</h1>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TracksListing discog={(songs)} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="artistsAlbums" style={{
                display: 'flex',
                width: '100%',
                marginTop: '10px',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box className="topArtists">
                    <Box style={{
                        flex: '1',
                        backgroundColor: theme.palette.background.paper,
                        marginLeft: '10px',
                        marginRight: '5px',
                        borderRadius: 24,
                        width: '30vw'
                    }}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <h1>Top Artists</h1>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TracksListing discog={(songs)} />
                        </Box>
                    </Box>
                </Box>
                <Box className="topAlbums">
                    <Box style={{
                        flex: '1',
                        backgroundColor: theme.palette.background.paper,
                        marginLeft: '5px',
                        marginRight: '10px',
                        borderRadius: 24,
                        width: '30vw'
                    }}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <h1>Top Albums</h1>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TracksListing discog={(songs)} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Main;
