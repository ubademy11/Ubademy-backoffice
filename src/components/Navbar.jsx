import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from "@material-ui/core/styles";


class Navbar extends React.Component {
    render(){
        return (
        <div className="Navbar">
                <href className="header-logo-info">
                    <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                </href>
        </div>
    )}
}

export default Navbar;