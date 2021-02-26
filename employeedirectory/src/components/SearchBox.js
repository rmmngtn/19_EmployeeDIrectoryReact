import React from "react";
import "../styles/SearchBox.css";

const SearchBox = ({handleSearchChange}) => { 
    return (
        <input type="search" placeholder="Search For An Employee" aria-label="Search" onChange={e => handleSearchChange(e)}></input>
    )
    
}
export default SearchBox; 
