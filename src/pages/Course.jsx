import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

class Course extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseInfo: [],
            loading: true
        };
        this.endpoint = "https://ubademy-course-service.herokuapp.com/course/byParams" + window.location.search;
    }

    fetchCourses = async () => {
		try {
            const { data } = await axios.get(this.endpoint);
            this.setState({ courseInfo: data });
        } catch(error) {
            console.log("Error al buscar el curso solicitado");
            console.log(error);
        }

        this.setState({ loading: false });
	};

    componentDidMount () {
        this.fetchCourses();
    }

    render () {
        console.log('th', this.state);
        let curso;
        if(this.state.loading)
            curso = <CircularProgress />; //TODO: cambiar ubicacion
        else 
            curso = <div className="coursePage">    
                        <div className="courseTopic">{this.state.courseInfo.title}</div>
                        
                        <div><img className="courseLogo" src={"https://i.ibb.co/tmGCPSy/python-para-principiantes.jpg"}></img></div>
                        <div className="courseTitle">{this.state.courseInfo.title}</div>
                        <div className="courseTitleSecondary">{this.state.courseInfo.subtitle}</div>
                        <div className="courseDescription">Descripción: {this.state.courseInfo.description}</div>
                        <div className="courseID">ID creador: {this.state.courseInfo.creatorId}</div>
                        <div className="courseLanguage"> Lenguaje: {this.state.courseInfo.language}</div>                
                        
                        <div className="adminTitle">Instructor</div>
                        <div><img className="adminPhoto" src={"https://i.ibb.co/Pjjh5TY/admin-dummy100100.png"}></img></div>
                        <div className="adminName">Alvaro Chirou • 380.000+ Students Worldwide</div>
                        <div className="adminGrades">Digital Technology Teacher | Seguridad informática y Forense</div>
                        <div className="adminRate">Calificacion del instructor: 4,5</div>
                        <div className="adminCourses">51 cursos</div>
                    </div>;
        return ( <div>{curso}</div>);
    }
}

export default Course;