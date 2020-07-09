import React from 'react';
import './Podcast.css';

import Bootstrap from "react-bootstrap";
import Favorite from "./Favorite";

class Podcast extends React.Component {

    static path = '/podcast';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div/>
        )
    }
}

export default Podcast;