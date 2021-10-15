import React from 'react';
import axios from 'axios';
const COURSES_ENDPOINT_URL = "http://localhost:3002/course/byParams?title=curso%de%excel%1";

class Course extends React.Component{
    constructor(props){
        super(props);
        /*this.state = {
            course_info: []   
        };*/
        this.course_info = []
    }
    
    goToSignIn = event => {
        event.preventDefault();
        window.location.href = "./dummyCourse";
    }

    fetchCourses = async () => {
		var response = await axios.get(COURSES_ENDPOINT_URL);
        //this.setState({course_info: response});
        this.course_info = response.data;
        console.log("en el setState");
        console.log(this.course_info);
	};

    componentDidMount () {
        this.fetchCourses();
        console.log("en el didMount");
        console.log(this.course_info.title);
    }

    render () {
        return(
            <div className="coursePage">
                <header>
                    <href className="header-logo-info">
                        <img className="header-logo" src={"https://i.ibb.co/GChKvms/Whats-App-Image-2021-10-01-at-16-32-08.jpg"}></img>
                    </href>
                </header>          

                <div className="courseTopic">{this.course_info.title}</div>
                <div className="courseInfo">
                    <div><img className="courseLogo" src={"https://i.ibb.co/tmGCPSy/python-para-principiantes.jpg"}></img></div>
                    <div className="courseTitle">haha</div>
                    <div className="courseTitleSecondary">En este curso aprenderás desde las bases hasta POO en Python.<br/> 
                    Empieza a Aprender ya Mismo de forma Gratuita.</div>
                    {/*<div><img className="courseLogo" src={"https://i.ibb.co/mvvm1Ry/logo-television.png"}></img></div>*/}
                    <div className="courseDetails">5h 20min de video bajo demanda.</div><br/>
                    <div className="courseDetails">Creado por Alvaro Chirou • 380.000+ Students Worldwide, Academia AC, Universidad Hacking, Walter Coto.</div><br/>
                    <div className="courseDetails">Español.</div>                
                </div>

                <div className="adminInfo">
                    <div className="adminTitle">Instructor</div>
                    <div><img className="adminPhoto" src={"https://i.ibb.co/Pjjh5TY/admin-dummy100100.png"}></img></div>
                    <div className="adminName">Alvaro Chirou • 380.000+ Students Worldwide</div>
                    <div className="adminGrades">Digital Technology Teacher | Seguridad informática y Forense</div>
                    <div className="adminDetails">Calificacion del instructor: 4,5</div><br/>
                    <div className="adminDetails">51 cursos</div>
                </div>

                {/*<Link to="/Users">Login</Link>*/}
            </div>
        );
    }
}

export default Course;