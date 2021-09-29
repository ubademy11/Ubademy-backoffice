import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log(email + " " + password);
        window.location.href = "./users";
    };

    return (
        <div className="LoginPage">
            <form className="LoginForm" onSubmit={handleSubmit}>
                <h2 className="FormTitle">Ubademy</h2>

                <div className="FormGroup">
                    <label className="FormField">Email</label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                
                <div className="FormGroup">
                    <label className="FormField">Password</label>
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <input className="FormSubmit" type="submit" value="Login"/>
            </form>

            {/*<Link to="/Users">Login</Link>*/}
        
        </div>
        
    );
}