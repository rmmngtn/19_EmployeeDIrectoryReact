import React, { Component } from "react"; 

export default class Header extends Component { 
    render () { 
        return ( 
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Click on name to order by heading or use the search box to narrow your results</p>
            </div>
        )
    }
}