import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

class CourseTable extends React.Component{

    constructor(props){
        super(props);
    }

    handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = "./dummyCourse"; // TODO GO TO PARTICULAR COURSE VIEW
    };

    //----------- TODO REMOVE AND CONNECT WITH API INFO ---------
    columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Language',
            selector: row => row.language,
            sortable: true
        },
        {
            name: 'CreatorId',
            selector: row => row.creatorId,
            sortable: true
        },
        {
            name: 'Options',
            cell: () => <button onClick={this.handleButtonClick}>Show</button>,
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

export default CourseTable;