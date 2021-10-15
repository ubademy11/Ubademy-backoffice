import React from 'react';
import axios from 'axios';
const COURSES_ENDPOINT_URL = "http://localhost:3002/course/byParams?title=curso%de%excel%1";

class Course extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            courseInfo: [],
            courseUrl: "http://localhost:3002/course/byParams?title="   
        };
    }

    fetchCourses = async () => {
		try {
            const { data } = await axios.get(this.state.courseUrl);
            this.setState({ courseInfo: data });
            console.log("en el setState");
            console.log(this.state.courseInfo);
        } catch(error) {
            console.log("Error al buscar los cursos");
            console.log(error);
        }
	};

    componentDidMount () {
        this.fetchCourses();
    }

    render () {
        console.log('th', this.state)
        return(
            <div className="coursePage">    
                <div className="courseTopic">{this.state.courseInfo.title}</div>
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