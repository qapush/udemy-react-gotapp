import React, {Component} from 'react';
import GotService from '../../services/gotService';
import './randomChar.css';

export default class RandomChar extends Component {
    constructor(){
        super()
        this.updateCharacter();
    }
    gotService = new GotService();

    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    updateCharacter(){
        const id = Math.floor(Math.random()* 2138 + 1);
        console.log(id);
        this.gotService.getCharacter(id)
            .then(char => {
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture
                })
            });
    }

    render() {
        const {name, gender, born, died, culture} = this.state;
        return (
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
        );
    }
}
