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
        </tr>
        
    );
}
export default TableRow;