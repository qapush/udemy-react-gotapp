import React, {Component} from 'react';
import './itemDetails.css';
import ErrorMessage  from '../errorMessage';

const Field = ({item, field, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{label}</span>
                        <span>{item[field]}</span>
                    </li>
    )
}

export {Field}

export default class ItemDetails extends Component {
    
    state = {
        item: null, 
        error: false
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem(){
        const { itemId } = this.props;
        if(!itemId) return

        this.props.getData(itemId)
            .then(item => {
                this.setState({item})
            })
    }


    render() {

        const { itemName } = this.props;

        if(!this.state.item){ 
            return <span className="select-error">Please select a {itemName}</span>
        }
        const {item} = this.state;
        const {name} = item;

        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}