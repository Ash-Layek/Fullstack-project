import React, {useState, useEffect} from 'react';

import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";


import Table from './tableComponents/Table/Table';

import Nav from './Navbar/Nav';

import Home from './Home'

import './App.css';

const App  = (props) =>   {

const [items, setItems] = useState([]);
const [category, setCategories] = useState([]);

const [categoryID, setCategoryID] = useState([]);



useEffect(() => {


  let url = "http://127.0.0.1:3001/items";

 
  axios.get(url).then(res=> {


    

    setItems(res.data);


  }).catch(err => {

    console.log(err);
    
    console.log("hahowaa");

  })




  let categoryurl = "http://127.0.0.1:3001/categories";

 
  axios.get(categoryurl).then(res=> {


  console.log(res.data);

  setCategories(res.data);

  }).catch(err => {

    console.log(err);
    
    console.log("hahowaa");

  })

  


  let categoryIDURL = "http://127.0.0.1:3001/categories/getID";

 
  axios.get(categoryIDURL).then(res=> {


  console.log(res.data);

  setCategoryID(res.data);



  }).catch(err => {

    console.log(err);
    
    console.log("hahowaa");

  })


  


}, []);


  return (
    <div className="App">

      <Nav entries={items} categoryEntries={category} categoryID={categoryID} />
      
    


      

    </div>
  );
}

export default App;
