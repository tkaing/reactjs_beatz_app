import React from 'react';
import './Header.css';

import ImageHeadphones from "../images/headphones.svg";

import { Col, Row } from "react-bootstrap";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <header className="Header">
                <Row>
                    <Col>
                        <div className={"Header-logo"}>
                            <img className={"Header-logo-image"} src={ ImageHeadphones } />
                            <span className={"Header-logo-headline"}>Beatz</span>
                        </div>
                    </Col>

                    <Col />
                </Row>
            </header>
        )
    }
}

export default Header;