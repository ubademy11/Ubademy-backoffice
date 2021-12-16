import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
//import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from "@material-ui/core/styles";


class Navbar extends React.Component { 
    signOut() {
        this.props.signOut();
        this.props.history.push('/');
    }

    render(){
        return (
        <div className="Navbar">
                <IconButton className='MenuIcon' onClick={() => this.props.sidebarClickHandler()}>
                    <MenuIcon/>
                </IconButton>

                <href className="header-logo-info">
                    <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                </href>

                <p className="current-user-info">{localStorage.getItem('currentUser')}</p>
                <button className="btn btn-sign-out" onClick={() => this.signOut()}>Sign out</button>
        </div>
    )}
}

export default withRouter(Navbar);