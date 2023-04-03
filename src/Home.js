import Table from './tableComponents/Table/Table';

import React, {useState, useEffect} from 'react';

import Nav from './Navbar/Nav';

import EditForm from './formComponents/editForm/EditForm';

import AddButton from './formComponents/addForm/AddButton';

import AddForm from './formComponents/addForm/AddForm';






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


    



return (

<div className="content-nav"> 

 {editing ? ( <EditForm entry={entrytoEdit}  />) : (<AddButton  add={_adding}/>)}


 {adding ? (<AddForm />) : ('')}


<Table entries={props.entries} onEditEntry={_oneditentry}/>

</div>


);


}


export default Home;