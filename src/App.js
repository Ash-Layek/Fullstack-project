import React, {useState, useEffect} from 'react';

import axios from 'axios';

import Table from './tableComponents/Table/Table';

import Nav from './Navbar/Nav';

import './App.css';

const App  = (props) =>   {

const [items, setItems] = useState([]);



useEffect(() => {


  let url = "http://127.0.0.1:3001/items";

 
  axios.get(url).then(res=> {


    

    setItems(res.data)


  }).catch(err => {

    console.log(err);
    
    console.log("hahowaa");

  })


}, []);

  return (
    <div className="App">
      
      <Nav />
      <Table entries={items} />

    </div>
  );
}

export default App;
