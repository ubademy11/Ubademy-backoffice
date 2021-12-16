import React, { useState } from 'react';
import axios from 'axios';
import * as Constants from '../constants.js';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json'; // for all requests

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errMsg: "",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            errMsg: "",
        });
    }

    async getLogInToken() {
        let response = await axios.post(Constants.LOGIN_URL, { email: this.state.email, password: this.state.password });
        const token = response.data.token;
        localStorage.setItem('token', token);

        return token;
    }

    async getUserInfo(token) {
        let response = await axios.get(Constants.USER_INFO_URL, { 
            headers: {
                'x-access-token': token 
            }        
        });
        const userInfo = response.data;
        console.log(userInfo);
        return userInfo;
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state);
        
        this.setState({ errMsg: "Ingresando..." });
        
        try {
            const token = await this.getLogInToken();
            const userInfo = await this.getUserInfo(token);
            this.props.updateCurrentUser(userInfo);
            this.props.history.push('/users');
        } catch(err) {
            console.log("ERROR LOGIN");
            console.log(err);
            if(err.response && err.response.status == 401) {
                this.setState({errMsg: "Usuario o contraseña incorrectos"});
            } else {
                this.setState({errMsg: "Error al conectarse con el servidor"});
            }
            
        }


        //window.location.href = "./users";
    };

    goToSignup = event => {
        event.preventDefault();
        window.location.href = "./signup"; 
    }

    render() {
        return (
            <div className="SignInPage">
                <header>
                    <href className="header-logo-info">
                        <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                    </href>
                    <button className="headerLogin" onClick={this.goToSignup}>
                        <img className="lock-logo" src={"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NiwxMS40NjY2N2MtMjIuMDk4MTgsMCAtNDAuMTMzMzMsMTguMDM1MTUgLTQwLjEzMzMzLDQwLjEzMzMzdjExLjQ2NjY3aC0xMS40NjY2N2MtNi4zMzUzMywwIC0xMS40NjY2Nyw1LjEzMTMzIC0xMS40NjY2NywxMS40NjY2N3Y2OC44YzAsNi4zMzUzMyA1LjEzMTMzLDExLjQ2NjY3IDExLjQ2NjY3LDExLjQ2NjY3aDEwMy4yYzYuMzM1MzMsMCAxMS40NjY2NywtNS4xMzEzMyAxMS40NjY2NywtMTEuNDY2Njd2LTY4LjhjMCwtNi4zMzUzMyAtNS4xMzEzMywtMTEuNDY2NjcgLTExLjQ2NjY3LC0xMS40NjY2N2gtMTEuNDY2Njd2LTExLjQ2NjY3YzAsLTIxLjM3NjI2IC0xNi45OTAyNywtMzguNTkzNTYgLTM4LjA5NTMxLC0zOS43MTkwMWMtMC42NDg0MSwtMC4yNjExOCAtMS4zMzkxMSwtMC40MDE2IC0yLjAzODAyLC0wLjQxNDMyek04NiwyMi45MzMzM2MxNS45MDIzNSwwIDI4LjY2NjY3LDEyLjc2NDMxIDI4LjY2NjY3LDI4LjY2NjY3djExLjQ2NjY3aC01Ny4zMzMzM3YtMTEuNDY2NjdjMCwtMTUuOTAyMzUgMTIuNzY0MzEsLTI4LjY2NjY3IDI4LjY2NjY3LC0yOC42NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}></img>
                         Regístrate
                    </button>
                </header>
    
                <form className="SignInForm" onSubmit={this.handleSubmit}>
                    <img className="FormLogo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}/>
                    <h4 className="FormInfo">¡Inicia sesión en tu cuenta de Ubademy Admin!</h4>
                
                    <div className="FormGroup">
                        <input 
                            className="inputUser"
                            name="email" 
                            type="text" 
                            value={this.state.email} 
                            placeholder="Correo electrónico" 
                            /*minlength="8"*/
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="FormGroup">
                        <input 
                            className="inputUser"
                            name="password" 
                            type="password" 
                            text="password" 
                            placeholder="Contraseña" 
                            value={this.state.password} 
                            /*minlength="8"*/
                            onChange={this.handleChange}
                        />
                    </div>
                    {<p className="SignInErrorMessage">{this.state.errMsg}</p>}
                    <input className="FormSubmit" type="submit" value="Iniciar sesión"/>
                </form>
    
                <div>
                    <br></br>
                    <text className="goToForgotPassword">¿Has olvidado tu contraseña?</text>
                    <br></br>
                    <text className="goToAnotherAccount">Iniciar sesión en una cuenta diferente</text>
                </div>
    
                {/*<Link to="/Users">SignIn</Link>*/}
            
            </div>
            
        );
    }
}

export default SignIn;