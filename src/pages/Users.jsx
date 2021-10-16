import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import UserTable from '../components/users/UserTable.jsx';

const USERS_ENDPOINT_URL = "http://localhost:3002/user";

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userList: [],
            loading: true,
        };
    }

    fetchUsers = async () => {

        try {
            const response = await axios.get(USERS_ENDPOINT_URL);
            this.setState({ userList: response.data.users });
            console.log(this.state.userList);
        } catch (err) {
            console.log("Error al buscar usuarios");
            console.log(err);
        }

        this.setState({ loading: false });
    }

    componentDidMount(prevProps) {
        this.fetchUsers();
    }

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