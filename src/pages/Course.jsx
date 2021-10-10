import React, { useState } from 'react';

export default function Login() {
    const goToSignIn = event => {
        event.preventDefault();
        window.location.href = "./dummyCourse";
    }

    return (
        <div className="coursePage">
            <header>
                <href className="header-logo-info">
                    <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                </href>
            </header>          

            <div className="courseTopic">Lenguajes de programacion</div>
            <div className="courseInfo">
                <div><img className="courseLogo" src={"https://i.ibb.co/tmGCPSy/python-para-principiantes.jpg"}></img></div>
                <div className="courseTitle">Curso para principiantes en Python. Aprende de cero con Práctica.</div>
                <div className="courseTitleSecondary">En este curso aprenderás desde las bases hasta POO en Python.<br/> 
                Empieza a Aprender ya Mismo de forma Gratuita.</div>
                {/*<div><img className="courseLogo" src={"https://i.ibb.co/mvvm1Ry/logo-television.png"}></img></div>*/}
                <div className="courseDetails">5h 20min de video bajo demanda.</div><br/>
                <div className="courseDetails">Creado por Alvaro Chirou • 380.000+ Students Worldwide, Academia AC, Universidad Hacking, Walter Coto.</div><br/>
                <div className="courseDetails">Español.</div>                
            </div>
            {/*<Link to="/Users">Login</Link>*/}
        </div>
        
    );
}