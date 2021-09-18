import React, { useState, useEffect } from "react";
import GotService from "../../services/gotService";
import "./randomChar.css";
import Spinner from "../spinner";
import Button from "reactstrap/lib/Button";

function RandomChar({ interval }) {
  const [showRandonChar, toggleRandomChar] = useState(true);

  const onToggleRandomChar = () => {
    toggleRandomChar((isRandomCharShown) => {
      return !isRandomCharShown;
    });
  };

  const details = showRandonChar ? <RandomChardetails interval={interval}/> : null;

  return (
    <>
      {details}
      <Button
        color="primary"
        className="mb-5"
        onClick={() => {
          onToggleRandomChar();
        }}
      >
        Toggle random character
      </Button>
    </>
  );
}

function RandomChardetails({interval}) {
  const gotService = new GotService();

  const [char, updateChar] = useState({ name: "a" });
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    updateCharacter();

    const timerID = setInterval(updateCharacter, interval);

    return (()=>{
      clearInterval(timerID);
    })
  }, []);

  function updateCharacter() {
      const id = Math.floor(Math.random() * 2138 + 1);
      gotService
        .getCharacter(id)
        .then( char => {
          updateChar(char);
          isLoading(false);
        })
    }



  const spinner = loading ? <Spinner /> : null;
  const content = !(loading) ? <View char={char} /> : null;

  return (
    <>
      {spinner}
      {content}
    </>
  );
}

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

export default RandomChar;  
