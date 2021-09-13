import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="section-header mb-4">
            <Container>
                <Row>
                    <Col className="header">
                        <h3 className="header-title">
                            <Link to='/'>
                                Game of Thrones DB
                            </Link>
                        </h3>
                        <ul className="header-list">
                            <li>
                                <Link to='/characters/'>
                                    Characters
                                </Link>
                            </li>
                            <li>
                                <Link to='/houses/'>     
                                    Houses
                                </Link>
                            </li>
                            <li>
                                <Link to='/books/'>
                                    Books
                                </Link>   
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;