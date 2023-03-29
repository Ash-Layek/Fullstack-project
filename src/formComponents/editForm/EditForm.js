import React, {useEffect, useState} from "react";
import './EditForm.css';
import Button from "../Button/Button";

const EditForm = props => {
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [sku, setSku] = useState('')
  
    useEffect(()=>{
        setID(props.entry.ID);
        setTitle(props.entry.TITLE);
        setCategoryID(props.entry.CATEGORY_ID);
        setDescription(props.entry.DESCRIPTION);
        setPrice(props.entry.PRICE);
        setQuantity(props.entry.QUANTITY);
        setSku(props.entry.SKU)
        
            
    }, [props]);

    const _detectValue1TextChanged = (key, value) => {
        setTitle(value);
        console.log("_detectValue1TextChanged event fired");
    }
 

    useEffect( () => {
        
        console.log("setEntry Changed");
    }, [id, title]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
       // props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        
        setID(''); setTitle('');
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _edit } title="Save Entry" />
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Value 1" value={ title } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />

            <label>Category ID:</label>
            <input type="text" placeholder="Value 1" value={ categoryID } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />

            <label>Description:</label>
            <input type="text" placeholder="Value 1" value={ description } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />

            <label>Price:</label>
            <input type="text" placeholder="Value 1" value={ quantity } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />

            <label>Quantity:</label>
            <input type="text" placeholder="Value 1" value={ price } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />

            <label>Sku:</label>
            <input type="text" placeholder="Value 1" value={ sku } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />
          
            </div>
    );
}
export default EditForm;