import React from 'react';

import DataTableAdmin from '../components/DataTableAdmin.jsx';

const USERS_ENDPOINT_URL = ""; //TODO CONECTAR API 

class Users extends React.Component {
    constructor(props){
        super(props);
    }

    fetchUsers = async page => {
        /*
		setLoading(true);

		const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`);

		setData(response.data.data);
		setTotalRows(response.data.total);
		setLoading(false);
        */
	};

    //ADD AND SEND TO DATA TABLE ADMIN BY PROPS
    /*
    const handlePageChange = page => {
		fetchUsers(page);
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		setLoading(true);

		const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);

		setData(response.data.data);
		setPerPage(newPerPage);
		setLoading(false);
	};

	useEffect(() => {
		fetchUsers(1); // fetch page 1 of users
		
	}, []);
     */


    setColumns = () => {
        //return columns;
    }

    render() { 
        return (
        <div className='Users'>
            <DataTableAdmin 
                className="data-table-users"
                title="Users"
                data={this.fetchUsers}
                columns={this.setColumns}
            ></DataTableAdmin>
        </div>
    )}
}

export default Users;