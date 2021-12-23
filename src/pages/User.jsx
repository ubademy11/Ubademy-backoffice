import React from 'react';
import axios from 'axios';
import '../css/users/User.css';
import { CircularProgress } from '@material-ui/core';
import * as Constants from '../constants.js';
import UserProfile from './UserProfile.jsx';
import CreatorProfile from './CreatorProfile.jsx';
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {},
            loading: true
        };
        this.endpoint = Constants.SEARCH_USER_BY_PARAMS_URL + window.location.search;
    }

    fetchUsers = async () => {
		try {
            const { data } = await axios.get(this.endpoint, {headers: {
                    'x-access-token': localStorage.getItem('token')
                }});
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
        if(this.state.loading)
            return <CircularProgress />; //TODO: cambiar ubicacion
        if(this.state.userInfo && this.state.userInfo.role == "CREATOR") {
            return (
                <>
                    <Grid className="goback-btn" container direction="row" alignItems="center" onClick={() => this.props.history.push('/users')}>
                        <ArrowBackIcon className="goback-icon" /> 
                        <p className="goback-text">Go back</p>
                    </Grid>
                    <CreatorProfile {...this.state}/>
                </>
            );
        } else {
            return (
                <>
                    <Grid className="goback-btn" container direction="row" alignItems="center" onClick={() => this.props.history.push('/users')}>
                        <ArrowBackIcon className="goback-icon" /> 
                        <p className="goback-text">Go back</p>
                    </Grid>
                    <UserProfile {...this.state}/>
                </>
            );
        }
    }
}

export default withRouter(User);