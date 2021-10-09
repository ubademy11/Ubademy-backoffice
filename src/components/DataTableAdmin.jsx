import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

class DataTableAdmin extends React.Component{

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
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Year',
            selector: row => row.year,
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
    
    datatableinfo = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
            edit: '<button></button>'
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
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
                columns={this.columns} //TODO REPLACE WITH {this.props.columns} 
                data={this.datatableinfo} //TODO REPLACE WITH {this.props.data}
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

export default DataTableAdmin;