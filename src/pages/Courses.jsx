import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import CourseTable from '../components/courses/CourseTable.jsx';

const COURSES_ENDPOINT_URL = "http://localhost:3002/course";

class Courses extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            courseList: [],
            loading: true,
        };
    }

    fetchUsers = async () => {
        
		//setLoading(true);

        try {
            const response = await axios.get(COURSES_ENDPOINT_URL);
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

    /*componentDidUpdate(prevProps) {
        if(this.state.loading && this.state.courseList.length > 0)
            this.setState({loading: false});
    }*/

    //ADD AND SEND TO DATA TABLE ADMIN BY PROPS
    /*
    const handlePageChange = page => {
		fetchUsers(page);
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		setLoading(true);

		const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);

		setData(response.data.data);
		setPerPage(newPerPage);
		setLoading(false);
	};

	useEffect(() => {
		fetchUsers(1); // fetch page 1 of users
		
	}, []);
     */

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