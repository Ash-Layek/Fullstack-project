import React from "react";
import TableRow from "../TableRow/TableRow";
import './Table.css';

const Table = props => {


    const _editEntry = entry => {
        console.log("Table _editEntry triggered");
        

        props.onEditEntry(entry);
    }

    
    const _deleteEntry = entry => {
        console.log("Table _deleteEntry triggered");
        props.onDeleteEntry(entry);
    }


 

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        
                        <th>ID : </th>
                        <th>CATEGORY_ID :  </th>
                        <th>TITLE : </th>
                        <th>DESCRIPTION : </th>
                        <th>PRICE : </th>
                        <th>QUANTITY : </th>
                        <th>SKU : </th>
                    </tr>
                </thead>
                <tbody>
                    {
                  props.entries.items?.map(
                          (item, index) => (
                             <TableRow index={ index } items={ item } key={ index } onEditEntry={ _editEntry } onDeleteEntry={ _deleteEntry } />
                             
                           )
                       )
                    }
                </tbody>
            </table>

        </div>
    );
}
export default Table;