import { useState } from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  let [searchKey,setSearchKey]=useState("")
    return (  <div className="navbar">
         <img src="https://static.vecteezy.com/system/resources/previews/004/967/183/original/anime-eyes-vision-fire-pop-culture-logo-design-vector.jpg" alt="logo" />
       <div className="searchbar">
        <input type="search" value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}}></input>
        <Link to={`/search-${searchKey}`} ><button>search</button></Link>
        </div>
       <Link to="/" ><h3 >Home</h3></Link> 
    </div>);
}
 
export default Navbar;