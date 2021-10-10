import React from 'react';
import axios from 'axios';

import DataTableAdmin from '../components/DataTableAdmin.jsx';

const COURSES_ENDPOINT_URL = "http://localhost:3002/course";

class Courses extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            courseList : [],
            
        }
    }

    componentDidMount(prevProps) {
        this.fetchCourses();
    }

    fetchCourses = async () => {
        
		//setLoading(true);

        try {
            const response = await axios.get(COURSES_ENDPOINT_URL);
            this.setState({ courseList : response.data.courses });
            console.log(this.state.courseList);
        } catch (err) {
            console.log("Error al buscar cursos");
            console.log(err);
        }
		
        /*this.setState({
            courses_list: response //.courseList TODO FIX AXIOS PROPERTY
        })*/
        /*
		setData(response.data.data);
		setTotalRows(response.data.total);
		setLoading(false);*/
	};

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


    setColumns = () => {
        //return columns;
    }

    render() { 
        return (
        <div className='Courses'>
            
            <DataTableAdmin 
                className="data-table-courses"
                title="Courses"
                data={this.fetchCourses}
                columns={this.setColumns}
            ></DataTableAdmin>

        </div>
    )}
}

export default Courses;