// import React from "react";

// function SearchBox({ handleSearchChange }) {
//     return (
//         <form className="form-inline">
//         <input type="search" placeholder="Search Employees" 
//             onChange={e => handleSearchChange(e)}
//         />
//         </form>
//     );
// }




// export default SearchBox; 

import React from "react";



const SearchBox = ({handleSearchChange}) => {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
                
            </form>
        </div>
    );
}
export default SearchBox;