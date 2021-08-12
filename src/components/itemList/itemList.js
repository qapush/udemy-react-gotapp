import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/gotService';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList
                })
            })
    }

    render() {

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}