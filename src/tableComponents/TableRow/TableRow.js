import React from "react";
import './TableRow.css';

const TableRow = props => {
    return(
        

       
        <tr key={props.index}>
            <td>{ props.items.ID }</td>
            <td>{ props.items.CATEGORY_ID }</td>
            <td>{ props.items.TITLE }</td>
            <td>{ props.items.DESCRIPTION }</td>
            <td>{ props.items.PRICE }</td>
            <td>{ props.items.QUANTITY }</td>
            <td>{ props.items.SKU }</td>
            <button onClick={() => props.onDeleteEntry(props.items)}>DELETE</button>
            <button onClick={() => props.onEditEntry(props.items)}>EDIT</button>

        </tr>
        
            
        
    );
}
export default TableRow;