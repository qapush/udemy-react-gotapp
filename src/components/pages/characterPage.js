import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import {Row, Col} from 'reactstrap';
import RandomChar from '../randomChar';

export default class CharacterPage extends Component {

    gotService = new GotService();

    state  = {
        selectedItem: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({  
            selectedItem: id 
        })
    }

    render(){
        

        if(this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender})=> `${name} (${gender})`}
            />
        );
        
        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getCharacter}
                itemName="character">
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )


        return(
           <>
            <Row>
                  <Col lg={{ size: 6, offset: 0 }}>
                    <RandomChar interval={10000}/>
                  </Col>
            </Row>
            <RowBlock left={itemList} right={itemDetails}/>
           </>
        )
    }
}