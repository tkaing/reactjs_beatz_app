import React from 'react';
import './Track.css';

import Bootstrap from "react-bootstrap";
import Favorite from "./Favorite";
import Header from "../components/Header";

class Track extends React.Component {

    static path = '/track';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className={"Track"}>
            </div>
        )
    }
}

export default Track;