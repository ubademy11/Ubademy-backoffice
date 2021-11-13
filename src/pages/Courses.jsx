import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import CourseTable from '../components/courses/CourseTable.jsx';

const COURSES_ENDPOINT_URL = "https://ubademy-course-service.herokuapp.com/course";

class Courses extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            courseList: [],
            loading: true,
        };
    }

    fetchUsers = async () => {

        try {
            const headers = { 'x-access-token': localStorage.getItem('token') };
            const response = await axios.get(COURSES_ENDPOINT_URL, { headers });
            console.log(response);
            this.setState({ courseList: response.data.courses });
            console.log(this.state.courseList);
        } catch (err) {
            console.log("Error al buscar los cursos");
            console.log(err);
        }
        
        this.setState({ loading: false });
    }

    componentDidMount(prevProps) {
        this.fetchUsers();
    }

    render() { 
        let vista;
        if(this.state.loading)
            vista = <CircularProgress />; //TODO: cambiar ubicacion
        else 
            vista = <CourseTable 
                        className="data-table-courses"
                        title="Courses"
                        columns={this.columns}
                        data={this.state.courseList}
                    ></CourseTable>;
        return (
            <div className='Users'>
                {vista}
            </div>
    )}
}

export default Courses;