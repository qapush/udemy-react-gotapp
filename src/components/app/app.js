import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BookPage, HousePage} from '../pages';
import GotService from '../../services/gotService';


export default class App extends Component {
    gotService = new GotService();

    state = {
        showRandonChar: true,
        error: false
    }


    toggleRandomChar = () => {
        this.setState( state => ({
            showRandonChar: !state.showRandonChar
        }))
    }

    render(){
        const { showRandonChar } = this.state;
        if(this.state.error) return <ErrorMessage/>
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

                    <CharacterPage/>
                    <BookPage/>
                    <HousePage/>                    
                   
                    

                </Container>
            </>
        );
    }

 
};

