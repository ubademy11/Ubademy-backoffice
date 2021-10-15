import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

class UserTable extends React.Component{

    constructor(props){
        super(props);
    }

    handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = "./ingenieria"; // TODO GO TO PARTICULAR COURSE VIEW
    };

    //----------- TODO REMOVE AND CONNECT WITH API INFO ---------
    columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Edit',
            selector: row => row.edit,
            cell: () => <button onClick={this.handleButtonClick}>Edit</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];
    
    //---------- END OF REMOVE ---------------------------------------------------

    paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    render() {
        return(
            <DataTable 
                title={this.props.title}
                columns={this.columns}
                data={this.props.data}
                fixedHeader={true}
                fixedHeaderScrollHeight="80vh"
                pagination 
                paginationComponentOptions={this.paginationComponentOptions} //REPLACE WITH paginationServer
                /* ADD THIS WHEN CONNECTION IS ESTABLISHED
                paginationServer
                paginationTotalRows={totalRows}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                */

            />
        )
    }
}

export default UserTable;