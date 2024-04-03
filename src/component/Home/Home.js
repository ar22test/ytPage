import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import bg from './canvas2.jpeg';
import './home.css';

const Home = () => {
    return (
        <Fragment>
            <Row>
                <Col lg={12} className="bglanding" id="home">
                    <Image className="bgimage" src={bg} alt="background"/>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Home;