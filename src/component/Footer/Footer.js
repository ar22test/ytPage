import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
// import Paticles from 'react-particles-js';

// import { particlesOptions } from '../../particles-option';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            {/* <Paticles className="particles particles-box-footer" params={particlesOptions} /> */}
            <footer>
                <Container>
                    <Row>
                        <div className="logo">
						La Guagua TV
                        </div>
                        <div className="social">
                            {/* <a href="mailto:aravind08222@gmail.com" rel="noreferrer" target="_blank"><i className="fa fa-envelope"></i></a> */}
                            {/* <a href="https://www.linkedin.com/in/aravind-r-3a0b44172" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a href="https://github.com/aravindr22" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="https://stackoverflow.com/users/12565460/aravind" rel="noreferrer" target="_blank"><i className="fa fa-stack-overflow"></i></a> */}
                            <a href="https://www.instagram.com/laguagua.tv/" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
                            {/* <a href="https://www.facebook.com/aravind.max.754" rel="noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/aravind_aru2" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a> */}
                        </div>
                    </Row>
                </Container>
            </footer>
            <section className="copyright">
                <Container>
                    <Row>
                        <Col>
                            <p>&copy; 2024 copyright all right reserved</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Footer;
