import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import { withRouter } from 'react-router';


class BookPage extends Component {

    gotService = new GotService();

    state  = {
        error: false
    }

    render(){
        

        if(this.state.error){
            return <ErrorMessage/>
        }

        return(
            <ItemList 
                onItemSelected={ (itemId) => {
                    this.props.history.push(`${itemId}`)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name, isbn})=> `${name} (ISBN: ${isbn})`}
            />
        )
    }
}

export default withRouter(BookPage);