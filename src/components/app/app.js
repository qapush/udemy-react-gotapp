import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BookPage, HousePage} from '../pages';
import GotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BooksItem } from '../pages';


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
            <Router>
                <div className="app"> 
                    <Container>
                        <Header/> 
                    </Container>
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
                        <Route path="/" exact component={() => <h1>Welcome to GOT database</h1>}/>
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/houses" component={HousePage}/>
                        <Route path="/books" exact component={BookPage}/>
                        <Route path="/books/:id" render={
                            ({match}) => {
                            const {id} = match.params
                            return <BooksItem bookId = {id}/>
                        }
                        }/>

                    </Container>
                </div>
            </Router>
        );
    }

 
};

