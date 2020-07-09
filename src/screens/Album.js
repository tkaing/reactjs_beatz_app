import React from 'react';
import './Album.css';

import Bootstrap from "react-bootstrap";
import Favorite from "./Favorite";

class Album extends React.Component {

    static path = '/album';

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

export default Album;