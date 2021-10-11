import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import UserTable from '../components/users/UserTable.jsx';

const USERS_ENDPOINT_URL = "http://localhost:3002/user"; //TODO CONECTAR API 

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userList: [],
            loading: true,
        };
    }

    fetchUsers = async () => {
        
		//setLoading(true);

        try {
            const response = await axios.get(USERS_ENDPOINT_URL);
            this.setState({ 
                userList: response.data.users,
                loading: false
            });
            console.log(this.state.userList);
        } catch (err) {
            console.log("Error al buscar usuarios");
            console.log(err);
        }
    }

    componentDidMount(prevProps) {
        this.fetchUsers();
    }

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

    paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    render() { 
        let vista;
        if(this.state.loading)
            vista = <CircularProgress />; //TODO: cambiar ubicacion
        else 
            vista = <UserTable 
                        className="data-table-users"
                        title="Users"
                        data={this.state.userList}
                    ></UserTable>;
        return (
            <div className='Users'>
                {vista}
            </div>
    )}
}

export default Users;