import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends Component {
    
    state = {
        showRandonChar: true
    }

    toggleRandomChar = () => {
        this.setState( state => ({
            showRandonChar: !state.showRandonChar
        }))
    }

    render(){
        const { showRandonChar } = this.state;
        return (
            <> 
                <Header/>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            {showRandonChar ? <RandomChar/> : null }
                            <Button 
                                color="primary" 
                                className="mb-5"
                                onClick ={ this.toggleRandomChar }
                                >
                               
                                Toggle random character
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

 
};

