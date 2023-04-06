

import React, {useState, useEffect} from 'react';

import axios from 'axios';




const AddCategory = (props) => {


    const [name, setName] = useState("");

    const [error, setError] = useState("");





    const _addCategory = () => {


        

        if (name === ""){


            setError("This field shouldn't be empty");

            return;

        }

        props.added(name);

       

        





    }


    return (


        <div className="AddCategory">


            
            <label >Name : </label>
            <input type="text" value={name} placeholder={error} onChange={(e) => setName(e.target.value)}></input>
            

            <button onClick={_addCategory}>ADD</button>
           
        </div>

        

    )
};



export default AddCategory;