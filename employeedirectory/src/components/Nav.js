import React from "react"; 
import SearchBox from "./SearchBox"; 
import "../styles/Nav.css"; 


function Nav({ handleSearchChange }) { 
    return ( 
        <nav className="navbar navbar-dark">
            <div className="search">
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    )
}





export default Nav; 