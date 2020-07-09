import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CategoryIcon from '@material-ui/icons/Category';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

import Track from "../screens/Track";
import Album from "../screens/Album";
import Genre from "../screens/Genre";
import Artist from "../screens/Artist";
import Podcast from "../screens/Podcast";
import Favorite from "../screens/Favorite";
import App from "../App";
import {MuiThemeProvider} from "@material-ui/core";

function TabBar(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabBar.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                history.push(Favorite.path);
                break;
            case 1:
                history.push(Track.path);
                break;
            case 2:
                history.push(Album.path);
                break;
            case 3:
                history.push(Artist.path);
                break;
            case 4:
                history.push(Genre.path);
                break;
            case 5:
                history.push(Podcast.path);
                break;
        }
    };

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={App.customTheme()}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable prevent tabs example"
                        centered
                    >
                        <Tab label="Mes Favoris" icon={<FavoriteIcon />} {...a11yProps(0)} />
                        <Tab label="Morceaux" icon={<MusicNoteIcon />} {...a11yProps(1)} />
                        <Tab label="Albums" icon={<QueueMusicIcon />} {...a11yProps(2)} />
                        <Tab label="Artistes" icon={<RecentActorsIcon />} {...a11yProps(3)} />
                        <Tab label="Genres" icon={<CategoryIcon />} {...a11yProps(4)} />
                        <Tab label="Podcasts" icon={<PlaylistPlayIcon />} {...a11yProps(5)} />
                    </Tabs>
                </AppBar>
            </MuiThemeProvider>
        </div>
    );
}