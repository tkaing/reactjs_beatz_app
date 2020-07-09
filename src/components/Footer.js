import React from 'react';
import './Footer.css';

import ImageHeadphones from "../images/headphones.svg";

import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import TabBar from "./TabBar";
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="Footer fixed-bottom">
                <TabBar />
            </footer>
        )
    }
}

export default withRouter(Footer);