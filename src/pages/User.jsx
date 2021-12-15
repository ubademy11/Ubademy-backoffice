import React from 'react';
import axios from 'axios';
import '../css/users/User.css';
import { CircularProgress } from '@material-ui/core';
import * as Constants from '../constants.js';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: [],
            loading: true
        };
        this.endpoint = Constants.SEARCH_USER_BY_PARAMS_URL + window.location.search;
    }

    fetchUsers = async () => {
		try {
            const { data } = await axios.get(this.endpoint);
            this.setState({ userInfo: data });
        } catch(error) {
            console.log("Error al buscar el usuario solicitado");
            console.log(error);
        }

        this.setState({ loading: false });
	};

    componentDidMount () {
        this.fetchUsers();
    }

    render () {
        console.log('th', this.state);
        let userPage;
        if(this.state.loading)
            userPage = <CircularProgress />; //TODO: cambiar ubicacion
        else 
            userPage = <div className="userPage">    
                        <img className="userLogo" src={"https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg"}></img>
                        <div className="userInfo">
                            <p>Nombre: </p> <p className="userData"> {this.state.userInfo.name}</p>
                            <p>Email: </p>  <p className="userData"> {this.state.userInfo.email}</p>              
                        </div>
                    </div>;
        return (
            <div>
                {userPage}
            </div>
            );
    }
}

export default User;