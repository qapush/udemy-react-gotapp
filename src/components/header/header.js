import React from 'react';
import {Col, Row, Container} from 'reactstrap';

const Header = () => {
    return (
        <section className="section-header mb-4">
            <Container>
                <Row>
                    <Col className="header">
                        <h3 className="header-title">
                            <a href="#">
                            Game of Thrones DB
                            </a>
                        </h3>
                        <ul className="header-list">
                            <li>
                                <a href="#">Characters</a>
                            </li>
                            <li>
                                <a href="#">Houses</a>
                            </li>
                            <li>
                                <a href="#">Books</a>   
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;