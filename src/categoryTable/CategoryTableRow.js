import React from 'react';

import "./CategoryTableRow.css"





const CategoryTableRow = props => {


return (


    <tr key={props.index}>


<td> {props.items.ID}</td>

<td> {props.items.NAME}</td>

<td><button onClick={() => {props.onDeleteCategory(props.items)}}>DELETE</button></td>

<td><button>EDIT</button></td>

<td></td>



    </tr>
)


}




export default CategoryTableRow;