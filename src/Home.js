import Table from './tableComponents/Table/Table';

import React, {useState, useEffect} from 'react';

import Nav from './Navbar/Nav';

import EditForm from './formComponents/editForm/EditForm';

import AddButton from './formComponents/addForm/AddButton';

import AddForm from './formComponents/addForm/AddForm';

import axios from "axios";






const Home  = (props) => {

    console.log("home is here");

    const [entrytoEdit, setSelectedEntryToEdit] = useState([]);

    const [editing, setEditing] = useState(false);

    const [adding, setAdding] = useState(false);




    const _adding = (entry) => {



        setAdding(true);

        console.log("adding triggerred");


    }




    const _oneditentry = (entry) => {


        setSelectedEntryToEdit(entry);
        setEditing(true);
        console.log(entry);

    }


    const _onDeleteEntry = (entry) => {
        let url = `http://127.0.0.1:3001/items/item`;
        axios.delete(url, {
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
      }


    



return (

<div className="content-nav"> 

 {editing ? ( <EditForm entry={entrytoEdit}  />) : (<AddButton  add={_adding}/>)}


 {adding ? (<AddForm categoryID={props.categoryID}/>) : ('')}


<Table entries={props.entries} onEditEntry={_oneditentry} onDeleteEntry={_onDeleteEntry} />

</div>


);


}


export default Home;