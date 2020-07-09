import React from 'react';
import './Artist.css';

import Bootstrap from "react-bootstrap";
import Favorite from "./Favorite";

class Artist extends React.Component {

    static path = '/artist';

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

export default Artist;