import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import * as Constants from '../constants.js';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class Course extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseInfo: [],
            courseLessons: [],
            courseInscriptions: [],
            loading: true
        };
        this.endpoint = Constants.SEARCH_COURSE_BY_PARAMS_URL + window.location.search;
    }

    fetchCourses = async () => {
		try {
            const { data } = await axios.get(this.endpoint);
            this.setState({ courseInfo: data.courses[0] });
        } catch(error) {
            console.log("Error al buscar el curso solicitado");
            console.log(error);
        }

        try {
            const { data: lessons } = await axios.get((Constants.COURSE_LESSONS + this.state.courseInfo.id));
            this.setState({ courseLessons: lessons });
        } catch(error) {
            console.log("Error al buscar lecciones del curso solicitado");
            console.log(error);
        }

        try {
            const { data: inscriptions } = await axios.get((Constants.COURSE_STUDENTS_URL + this.state.courseInfo.id));
            this.setState({ courseInscriptions: inscriptions });
        } catch(error) {
            console.log("Error al buscar inscripciones del curso solicitado");
            console.log(error);
        }

        this.setState({ loading: false });
	};

    componentDidMount () {
        this.fetchCourses();
    }

    render () {
        console.log('th', this.state);
        console.log('course', this.state.courseInfo);
        console.log('parameters', window.location.search);
        console.log('endpoint', this.endpoint);
        console.log('lessons', this.state.courseLessons);
        let curso;
        let creationDate;
        let creation;
        if(this.state.loading)
            curso = <CircularProgress />; //TODO: cambiar ubicacion
        else 
            curso =  <div className="coursePage"> 
                        <div className="courseInfo">
                            <h2>{this.state.courseInfo.title}</h2>
                            <p><b>Subtitle:</b> {this.state.courseInfo.subtitle}</p>
                            
                            <p><b>Description:</b> {this.state.courseInfo.description}</p>
                            <p><b>Language:</b> {this.state.courseInfo.language}</p>
                            <p><b>Creator:</b> {this.state.courseInfo.creator.name}</p>

                            <Accordion className="accordion inscription-list" defaultExpanded={true}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <b>Lessons</b>
                                </AccordionSummary>
                                {this.state.courseLessons.map(lesson => {
                                    return <AccordionDetails>{lesson.id} - {lesson.title}</AccordionDetails>
                                })}
                            </Accordion>

                            <Accordion className="accordion inscription-list" defaultExpanded={true}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                   <b>Inscriptions</b> 
                                </AccordionSummary>
                                {this.state.courseInscriptions.map(student => {
                                    return <AccordionDetails>{student.name}</AccordionDetails>
                                })}
                            </Accordion>
                        </div>
                    </div>;
        return (
                <>
                    <Grid className="goback-btn" container direction="row" alignItems="center" onClick={() => this.props.history.push('/courses')}>
                        <ArrowBackIcon className="goback-icon" /> 
                        <p className="goback-text">Go back</p>
                    </Grid>
                    <div>{curso}</div>
                </>
        );
    }
}

export default Course;