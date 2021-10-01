import React, { useState } from 'react';

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log(email + " " + password);
        window.location.href = "./users";
    };

    const goToSignIn = event => {
        event.preventDefault();
        window.location.href = "./signin";
    }

    return (
        <div className="LoginPage">
            <form className="LoginForm" onSubmit={handleSubmit}>
                <h2 className="FormTitle">Ubademy</h2>
                <h4 className="FormInfo">Inscríbete y comienza a aprender.</h4>

                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="name" 
                        type="text" 
                        value={name} 
                        placeholder="Name" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="email" 
                        type="text" 
                        value={email} 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="FormGroup">
                    <input 
                        className="inputUser"
                        name="password" 
                        type="password" 
                        text="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <input className="FormSubmit" type="submit" value="Login"/>

                <div className="termsAndPrivacy">
                    <text>Al registrarte, aceptas nuestras </text>
                    <text className="privacyPolicy">Condiciones de uso y Política de privacidad.</text>
                </div>

            </form>

            <div>
                <text><br></br>¿Ya tienes una cuenta? </text>
                <text className="goToSignIn" onClick={goToSignIn}>Inicia sesión</text>
            </div>

            {/*<Link to="/Users">Login</Link>*/}
        
        </div>
        
    );
}