import React from 'react';
import './App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Material.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Track from "./screens/Track";
import Album from "./screens/Album";
import Genre from "./screens/Genre";
import Artist from "./screens/Artist";
import Podcast from "./screens/Podcast";
import Favorite from "./screens/Favorite";
import Footer from "./components/Footer";
import Header from "./components/Header";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.toApp = this.toApp.bind(this);
        this.state = {};
    }

    componentDidMount() {
    }

    toApp(options) {
        this.setState(options);
    }

    static customTheme() {
        return createMuiTheme({
            palette: {
                primary: {
                    light: '#9658F3',
                    main: '#9658F3',
                    dark: '#9658F3',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ECB1CC',
                    main: '#ECB1CC',
                    dark: '#ECB1CC',
                    contrastText: '#000',
                },
            },
        });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header />

                    <Switch>
                        <Route exact path={ Favorite.path }>
                            <Favorite toParent={ this.toApp } />
                        </Route>
                        <Route path={ Track.path }>
                            <Track toParent={ this.toApp } />
                        </Route>
                        <Route path={ Album.path }>
                            <Album toParent={ this.toApp } />
                        </Route>
                        <Route path={ Artist.path }>
                            <Artist toParent={ this.toApp } />
                        </Route>
                        <Route path={ Genre.path }>
                            <Genre toParent={ this.toApp } />
                        </Route>
                        <Route path={ Podcast.path }>
                            <Podcast toParent={ this.toApp } />
                        </Route>
                    </Switch>

                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;