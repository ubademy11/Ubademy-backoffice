import React, { useState } from 'react';

export default function Login() {
    const goToSignIn = event => {
        event.preventDefault();
        window.location.href = "./dummyCourse";
    }

    return (
        <div className="LoginPage">
            <header>
                <href className="header-logo-info">
                    <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                </href>
            </header>

            <form className="LoginForm">
                <img className="FormLogo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}/>

                <input className="FormSubmit" type="submit" value="Regístrate"/>
            </form>

            {/*<Link to="/Users">Login</Link>*/}
        
        </div>
        
    );
}