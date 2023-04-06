import {Route, Routes, NavLink, HashRouter} from "react-router-dom";

import Home from "../Home"

import Categories from "../categoryComponents/Categories.js";


import "./Nav.css";

const Nav = (props) => {


console.log("nav is here");


    return(

<HashRouter>
<div className="navv">
        <ul>

<li><NavLink to="/items"> Items List</NavLink></li>
<li><NavLink to="./categories" > Category List</NavLink></li>


        </ul>

        </div>

        <div className="content">

            
        <Routes>

        
        <Route   path="/items" element={<Home entries={props.entries}/>}/>
        <Route  path="/categories" element={<Categories  entries ={props.categoryEntries}/>}/>
        
        </Routes>

         



        </div>

  
        </HashRouter>

    

    );
};


export default Nav;