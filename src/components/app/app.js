import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../header";

import ErrorMessage from "../errorMessage";
import { CharacterPage, BookPage, HousePage, LostPage } from "../pages";
import GotService from "../../services/gotService";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BooksItem } from "../pages";


export default class App extends Component {
  gotService = new GotService();

  state = {
    error: false
  };


  render() {
    if (this.state.error) return <ErrorMessage />;
    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Switch>
              <Route path="/characters" exact component={CharacterPage} />
              <Route path="/houses" exact component={HousePage} />
              <Route path="/books" exact component={BookPage} />
              <Route
                path="/books/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <BooksItem bookId={id} />;
                }}
              />

              <Route path="/" exact>
                
              </Route>
              
              <Route path="*" component={LostPage}/>

            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
