import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

class DataTableAdmin extends React.Component{

    handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = "./ingenieria";
        console.log('clicked');
    };
    
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
    
    paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    render() {
        return(
            <DataTable 
                columns={this.columns} 
                data={this.datatableinfo}
                pagination 
                paginationComponentOptions={this.paginationComponentOptions}
            />
        )
    }
}

export default DataTableAdmin;