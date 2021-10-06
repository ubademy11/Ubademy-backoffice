import React from 'react';
import Course from "../components/Course.jsx";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: [
                {id: 1, firstName: "Pedro", lastName: "Lopez", email: "pedro.cabj@test.com", role: "User"},
                {id: 2, firstName: "Victoria", lastName: "Gonzalez", email: "vic2000@test.com", role: "User"},
                {id: 3, firstName: "Juan", lastName: "Gutierrez", email: "juan@test.com", role: "Admin"},
                {id: 4, firstName: "Lucas", lastName: "Garcia", email: "lucasgarcia@test.com", role: "User"},
                {id: 5, firstName: "Sofia", lastName: "Fernandez", email: "sofer@test.com", role: "Admin"},
            ],
            categoriesOpen: true
        };

        this.responsive = {
            desktop: {
              breakpoint: { max: 300, min: 300 },
              items: 3,
              slidesToSlide: 3 // optional, default to 1.
            }
        }
    }

    deleteCourse = function(courseId) {
        let courses = [...this.state.courses];
        courses = courses.filter((course) => {
            return course.id !== courseId
        });
        this.setState({courses : courses});
        
    }

    toggleCategories() {
        this.setState(prevState => ({
            courses: [
                {id: 1, firstName: "Pedro", lastName: "Lopez", email: "pedro.cabj@test.com", role: "User"},
                {id: 2, firstName: "Victoria", lastName: "Gonzalez", email: "vic2000@test.com", role: "User"},
                {id: 3, firstName: "Juan", lastName: "Gutierrez", email: "juan@test.com", role: "Admin"},
                {id: 4, firstName: "Lucas", lastName: "Garcia", email: "lucasgarcia@test.com", role: "User"},
                {id: 5, firstName: "Sofia", lastName: "Fernandez", email: "sofer@test.com", role: "Admin"},
            ],
            categoriesOpen: !prevState.categoriesOpen
        }));
    }

    render() { 
        return (
        <div className='Courses'>
            
            <div className="Categories">
                <h2 className="courses-title" onClick={this.toggleCategories.bind(this)}>Categorías</h2>
                <div className={this.state.categoriesOpen ? 'category-list-div' : 'category-list-div-hidden'}>
                    <nav className="category-list-nav">
                        <ul className="category-list-style">
                            <li className="category"><a className="goToCategory" href="#">Ingeniería</a></li>
                            <li className="category"><a className="goToCategory" href="#">Moda</a></li>
                            <li className="category"><a className="goToCategory" href="#">Crypto</a></li>
                            <li className="category"><a className="goToCategory" href="#">Negocios</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <table className="CourseTable table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.courses.map((course) => {
                        return <Course courseData={course} onClick={this.deleteCourse.bind(this)}/>
                    })}
                </tbody>
            </table>
        </div>
    )}
}

export default Courses;