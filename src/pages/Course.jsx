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
                        
                        <div className="courseInfo">
                            <h2 className="courseTitle">{this.state.courseInfo.title}</h2>
                            <h5 className="courseTitleSecondary">{this.state.courseInfo.subtitle}</h5>
                            <img className="courseLogo" src={"https://i.ibb.co/tmGCPSy/python-para-principiantes.jpg"}></img>
                            <div className="courseData">
                                Descripción:<h5 className="data">{this.state.courseInfo.description}</h5>
                                ID creador: <h5 className="data"> {this.state.courseInfo.creatorId}</h5>
                                Lenguaje:<h5 className="data"> {this.state.courseInfo.language}</h5> 
                            </div>
                        </div>              
                    </div>;
        return ( <div>{curso}</div>);
    }
}

export default Course;