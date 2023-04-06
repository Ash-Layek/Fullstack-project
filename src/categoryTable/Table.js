import React , {useEffect, useState} from "react";
import CategoryTableRow from "./CategoryTableRow.js";
import './Table.css';

import Button from "./button/Button.js";

import AddCategory from "../categoryComponents/addCategory/AddCategory.js";


import axios from "axios";


const Table = props => {


    const [adding, setAdding] = useState(false);


    const _deleteCategory = entry => {

        let url = `http://127.0.0.1:3001/categories/category`;
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


    const _add = () => {

        setAdding(true);
        console.log(adding);

      
      }


      const _addedCategory = entry => {


        let url = `http://127.0.0.1:3001/categories`; 


        axios.post(url, {
          name: entry
        }).then(res => {
      
          console.log(res.data.items)
          window.location.reload();
      
        }).catch(error => {
      
          console.log(error.response);
        });
        

        
      }

 


    return(
        
        <div className="Table">


          { adding ? <AddCategory added={_addedCategory}/> :  <Button  add={_add}/> }

   <table style={{ marginTop:'16px' }} border="1">
<thead>


<tr>


    <th>CATEGORY ID : </th>

    <th>CATEGORY NAME : </th>
</tr>
</thead>
<tbody>


{



props.entries.items?.map(
    (item, index) => (
       <CategoryTableRow index={ index } items={ item } key={ index } onDeleteCategory={_deleteCategory}/>
       
     )
 )
}


</tbody>




   



        </table>




         

        </div>
    );
}
export default Table;