import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {

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
                getData={this.gotService.getAllHouses}
                renderItem={({name, region})=> `${name} (${region})`}
            />
        );
        
        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getHouse}
                itemName="house"
                >
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral weapons'/>
            </ItemDetails>
        )


        return(
            <RowBlock 
            left={itemList} 
            right={itemDetails}
            />
        )
    }
}