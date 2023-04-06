import React, {useEffect, useState} from "react";
import './EditForm.css';
import Button from "../Button/Button";

import axios from "axios";

const EditForm = props => {
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [sku, setSku] = useState('')
    const [entry, setEntry] = useState('');
  
    useEffect(()=>{
        setID(props.entry.ID);
        setTitle(props.entry.TITLE);
        setCategoryID(props.entry.CATEGORY_ID);
        setDescription(props.entry.DESCRIPTION);
        setPrice(props.entry.PRICE);
        setQuantity(props.entry.QUANTITY);
        setSku(props.entry.SKU)
        
            
    }, [props]);

    const _detectTitleChanged = (key, value) => {
        setTitle(value);
        console.log("title event fired");
    }
    const _detectCategoryIDChanged = (key, value) => {
      setCategoryID(value);
      console.log("category event fired");
  }
  const _detectDescriptionChanged = (key, value) => {
    setDescription(value);
    console.log("Description event fired");
}
const _detectPriceChanged = (key, value) => {
  setPrice(value);
  console.log("price  event fired");
}
const _detectQuantityChanged = (key, value) => {
  setQuantity(value);
  console.log("Quantity event fired");
}
const _detectSkuChanged = (key, value) => {
  setSku(value);
  console.log("Sku event fired");
}

 

 

    const _edit = () => {
    

      let url = `http://127.0.0.1:3001/items/${id}`;

        axios.patch(url, {
            data: {
              entry: entry
            }
          })
          .then(res => {
            console.log(res.data.items);
            window.location.reload();
          })
          .catch(error => {
            console.log(error.response);
          });

    //update entries with response

    }

    useEffect( () => {
      setEntry({ 'id' :id,  'title':title, 'categoryID':categoryID, 'description':description, 'price': price, 'quantity': quantity, 'sku':sku});
      console.log("setEntry Changed");

  }, [ id ,title, categoryID, description, price , quantity, sku]);

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
              onChange={ e => _detectTitleChanged('title', e.target.value) } />
            <br />

            <label>Category ID:</label>
            <input type="text" placeholder="Value 1" value={ categoryID } 
              onChange={ e => _detectCategoryIDChanged('categoryID', e.target.value) } />
            <br />

            <label>Description:</label>
            <input type="text" placeholder="Value 1" value={ description } 
              onChange={ e => _detectDescriptionChanged('description', e.target.value) } />
            <br />

            <label>Price:</label>
            <input type="text" placeholder="Value 1" value={ price } 
              onChange={ e => _detectPriceChanged('price', e.target.value) } />
            <br />

            <label>Quantity:</label>
            <input type="text" placeholder="Value 1" value={ quantity } 
              onChange={ e => _detectQuantityChanged('quantity', e.target.value) } />
            <br />

            <label>Sku:</label>
            <input type="text" placeholder="Value 1" value={ sku } 

              onChange={ e => _detectSkuChanged('sku', e.target.value) } />
            <br />
          
            </div>
    );
}
export default EditForm;