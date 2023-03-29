import Table from './tableComponents/Table/Table';

import Nav from './Navbar/Nav';



const Home  = (props) => {

    console.log("home is here");
return (

<div className="content-nav"> 


<Table entries={props.entries}/>

</div>


);


}


export default Home;