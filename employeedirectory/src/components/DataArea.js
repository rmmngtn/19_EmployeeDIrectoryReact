import React, { Component } from "react"; 
import DataTable from "./DataTable"; 
import Nav from "./Nav"; 
import API from "../utils/API"; 
import "../styles/DataArea.css";


handleSort = headings => { 
    if (this.state.order === "descend") { 
        this.setState({ 
            order: "ascend", 
        });
    } else { 
        this.setState({
            order: "descend", 
        });
    };
}



handleSearchChange = (event) => { 

}


componentDidMount() { 
    API.getUsers().then(results => { 
        this.setState({
            users: results.data.results, 
            filteredUsers: results.data.results
        });
    });
}

render (){ 
    return (
        <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
            <DataTable 
            headings={this.headings}
            users={this.state.filterUsers}
            handleSort={this.handleSort}
            />
        </div>
        </>
    );
}