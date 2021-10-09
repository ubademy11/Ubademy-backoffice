import React from 'react';

import Course from "../components/courses/Course.jsx";
import CoursesMenu from '../components/courses/CoursesMenu';
import DataTableAdmin from '../components/DataTableAdmin.jsx';

class Courses extends React.Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (
        <div className='Courses'>
            
            <CoursesMenu></CoursesMenu>
            <DataTableAdmin className="data-table-courses"></DataTableAdmin>

        </div>
    )}
}

export default Courses;