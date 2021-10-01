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
            <img src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"} alt="logooooo"/>

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
                
                <input className="FormSubmit" type="submit" value="Sign In"/>
            </form>

            {/*<Link to="/Users">SignIn</Link>*/}
        
        </div>
        
    );
}