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
                <IconButton className='MenuIcon' onClick={() => this.props.onClick()}>
                    <MenuIcon/>
                </IconButton>
                <h4>Ubademy</h4>
        </div>
    )}
}

export default Navbar;