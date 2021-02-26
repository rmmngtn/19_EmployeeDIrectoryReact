import React from "react"; 
import SearchBox from "./SearchBox"; 
import "../styles/Nav.css"; 


function Nav({ handleSearchChange }) { 
    return ( 
        <nav className="navbar">
            
            <SearchBox />
        </nav>
    )
}





export default Nav; 