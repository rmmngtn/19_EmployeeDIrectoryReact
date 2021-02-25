


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