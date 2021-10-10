import React, { useState } from 'react';

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setAuthorizationToken] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log(email + " " + password);
        window.location.href = "./users";
    };

    const goToSignIn = event => {
        event.preventDefault();
        window.location.href = "./";
    }

    return (
        <div className="LoginPage">
            <header>
                <href className="header-logo-info">
                    <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                </href>
                <button className="headerSignin" onClick={goToSignIn} >Iniciar sesión</button>
            </header>
            <form className="LoginForm" onSubmit={handleSubmit}>
                <img className="FormLogo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}/>
                <h4 className="FormInfo">
                <img className="lock-logo-black" src={"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMDAwMDAiPjxwYXRoIGQ9Ik04NiwxMS40NjY2N2MtMjIuMDk4MTgsMCAtNDAuMTMzMzMsMTguMDM1MTUgLTQwLjEzMzMzLDQwLjEzMzMzdjExLjQ2NjY3aC0xMS40NjY2N2MtNi4zMzUzMywwIC0xMS40NjY2Nyw1LjEzMTMzIC0xMS40NjY2NywxMS40NjY2N3Y2OC44YzAsNi4zMzUzMyA1LjEzMTMzLDExLjQ2NjY3IDExLjQ2NjY3LDExLjQ2NjY3aDEwMy4yYzYuMzM1MzMsMCAxMS40NjY2NywtNS4xMzEzMyAxMS40NjY2NywtMTEuNDY2Njd2LTY4LjhjMCwtNi4zMzUzMyAtNS4xMzEzMywtMTEuNDY2NjcgLTExLjQ2NjY3LC0xMS40NjY2N2gtMTEuNDY2Njd2LTExLjQ2NjY3YzAsLTIxLjM3NjI2IC0xNi45OTAyNywtMzguNTkzNTYgLTM4LjA5NTMxLC0zOS43MTkwMWMtMC42NDg0MSwtMC4yNjExOCAtMS4zMzkxMSwtMC40MDE2IC0yLjAzODAyLC0wLjQxNDMyek04NiwyMi45MzMzM2MxNS45MDIzNSwwIDI4LjY2NjY3LDEyLjc2NDMxIDI4LjY2NjY3LDI4LjY2NjY3djExLjQ2NjY3aC01Ny4zMzMzM3YtMTEuNDY2NjdjMCwtMTUuOTAyMzUgMTIuNzY0MzEsLTI4LjY2NjY3IDI4LjY2NjY3LC0yOC42NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}></img>
                     Crea tu cuenta de administrador
                </h4>

                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="name" 
                        type="text" 
                        value={name} 
                        placeholder="Nombre completoo0000 propbando" 
                        minlength="8"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="email" 
                        type="text" 
                        value={email} 
                        placeholder="Correo electrónico" 
                        minlength="8"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="password" 
                        type="password" 
                        text="password" 
                        placeholder="Contraseña" 
                        value={password} 
                        minlength="8"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="authorization-token" 
                        type="authorization-token" 
                        text="authorization-token" 
                        placeholder="Token de autorización" 
                        value={token} 
                        minlength="8"
                        onChange={(e) => setAuthorizationToken(e.target.value)}
                    />
                </div>
                
                <input className="FormSubmit" type="submit" value="Regístrate"/>

                <div className="termsAndPrivacy">
                    <text>Al registrarte, aceptas nuestras </text>
                    <text className="privacyPolicy">Condiciones de uso y Política de privacidad.</text>
                </div>

            </form>

            <div className="backToSignin">
                <text><br></br>¿Ya tienes una cuenta? </text>
                <text className="goToSignIn" onClick={goToSignIn}>Iniciar sesión</text>
            </div>

            {/*<Link to="/Users">Login</Link>*/}
        
        </div>
        
    );
}