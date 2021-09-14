import React, { Component } from "react";
import GotService from "../../services/gotService";
import "./randomChar.css";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import PropTypes from "prop-types";
import Button from "reactstrap/lib/Button";

export default class RandomChar extends Component {
  gotService = new GotService();

  state = {
    char: {},
    loading: true,
    showRandonChar: true,
  };

  componentDidMount() {
    this.updateCharacter();
    this.timerID = setInterval(
      this.updateCharacter.bind(this),
      this.props.interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateCharacter() {
    const id = Math.floor(Math.random() * 2138 + 1);
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  toggleRandomChar = () => {
    this.setState((state) => ({
      showRandonChar: !state.showRandonChar,
    }));
  };

  render() {
    const { char, loading, error, showRandonChar } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !showRandonChar) ? (
      <View char={char} />
    ) : null;

    return (
      <>
        {errorMessage}
        {spinner}
        {content}
        <Button
          color="primary"
          className="mb-5"
          onClick={this.toggleRandomChar}
        >
          Toggle random character
        </Button>
      </>
    );
  }
}

RandomChar.defaultProps = {
  interval: 2000
};

RandomChar.propTypes = {
  interval: PropTypes.number,
};

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;

  return (
    <>
      <div className="random-block rounded">
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
