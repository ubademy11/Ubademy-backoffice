const columns = [
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

export default columns;