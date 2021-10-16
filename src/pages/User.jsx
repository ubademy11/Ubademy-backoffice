import React from 'react';
import axios from 'axios';
import '../css/users/User.css';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: []
        };
        this.endpoint = "http://localhost:3002/user/byParams" + window.location.search;
    }

    fetchUsers = async () => {
		try {
            const { data } = await axios.get(this.endpoint);
            this.setState({ userInfo: data });
        } catch(error) {
            console.log("Error al buscar el usuario solicitado");
            console.log(error);
        }
	};

    componentDidMount () {
        this.fetchUsers();
    }

    render () {
        console.log('th', this.state);
        console.log(window.location.search);
        return(
            <div className="userPage">    
                <img className="userLogo" src={"https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg"}></img>
                <div className="userInfo">
                    <p>Nombre: </p> <p className="userData"> {this.state.userInfo.name}</p>
                    <p>Email: </p>  <p className="userData"> {this.state.userInfo.email}</p>              
                </div>
            </div>
        );
    }
}

export default User;