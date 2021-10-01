import React, { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log(email + " " + password);
        window.location.href = "./users";
    };

    return (
        <div className="SignInPage">
            <form className="SignInForm" onSubmit={handleSubmit}>
            <img className="FormLogo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}/>
            <h4 className="FormInfo">¡Inicia sesión en tu cuenta de Ubademy!</h4>
            
                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="email" 
                        type="text" 
                        value={email} 
                        placeholder="Correo electrónico" 
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
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