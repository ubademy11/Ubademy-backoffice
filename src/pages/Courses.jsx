import React from 'react';

import Course from "../components/Course.jsx";
import { Carousel } from 'react-carousel-minimal';

class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoriesOpen: true,
            welcomeOpen: true
        };
    }

    deleteCourse = function(courseId) {
        let courses = [...courses_fake];
        courses = courses.filter((course) => {
            return course.id !== courseId
        });
        this.setState({courses : courses});
        
    }

    toggleCategories() {
        this.setState(prevState => ({
            categoriesOpen: !prevState.categoriesOpen,
            welcomeOpen: prevState.welcomeOpen
        }));
    }

    showCategory() {
        this.setState(prevState => ({
            categoriesOpen: !prevState.categoriesOpen,
            welcomeOpen: false
        }));
    }

    render() { 
        return (
        <div className='Courses'>
            
            <div className="Categories">
                <h2 className="courses-title" onClick={this.toggleCategories.bind(this)}>CURSOS</h2>
                <div className={this.state.categoriesOpen ? 'category-list-div' : 'category-list-div-hidden'}>
                    <nav className="category-list-nav">
                        <ul className="category-list-style">
                            <li className="category"><a className="goToCategory" href="./info" onClick={this.showCategory.bind(this)} href="#">Ingeniería</a></li>
                            <li className="category"><a className="goToCategory" onClick={this.showCategory.bind(this)} >Moda</a></li>
                            <li className="category"><a className="goToCategory" onClick={this.showCategory.bind(this)}>Crypto</a></li>
                            <li className="category"><a className="goToCategory">Negocios</a></li>
                            <li className="category"><a className="goToCategory">Info db</a></li>
                            <li className="category"><a className="goToCategory">Info db</a></li>
                            <li className="category"><a className="goToCategory">Info db</a></li>
                            <li className="category"><a className="goToCategory">Info db</a></li>
                            <li className="category"><a className="goToCategory">Info db</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={this.state.welcomeOpen ? 'welcome-categories' : 'welcome-categories-hidden'}>
                <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="7px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="white"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style = {{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                />
            </div>

            <div id='categoryInfo' className={this.state.welcomeOpen ? 'categoryInfo-hidden' : 'categoryInfo'}>

                <table className="CourseTable table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Teacher</th>
                            <th>Time</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses_fake.map((course) => {
                            return <Course courseData={course} onClick={this.deleteCourse.bind(this)}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )}
}

//------- Start of Carousel data
const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    };
const slideNumberStyle =  {
        fontSize: '20px',
        fontWeight: 'bold'
    };

const data = [
    {
        image: "https://image.freepik.com/vector-gratis/concepto-gestion-tiempo_52683-63895.jpg",
        caption: "Encuentra y edita la información de tu curso"
    },
    {
        image: "https://www.axondigital.mx/wp-content/uploads/2019/05/businessrewards.jpg",
        caption: "Analiza el alcance de tu curso"
    },
    {
        image: "https://www.flexxus.com.ar/wp-content/uploads/2017/07/icerik-pazarlama.png",
        caption: "Administra a tus alumnos"
    }
  ];

//------- End of Carousel data

//DATA HARDCODEADA -- REMPLAZO POR DB
const courses_fake = [
    {id: 1, name: "ingenieria", teacher: "Lopez", time: "lunes", period: "User"},
    {id: 2, name: "moda", teacher: "Gonzalez", time: "miercoles", period: "User"},
    {id: 3, name: "negocios", teacher: "Gutierrez", time: "viernes", period: "Admin"},
    {id: 4, name: "bla", teacher: "Garcia", time: "asincronico", period: "User"},
    {id: 5, name: "bla", teacher: "Fernandez", time: "sabados", period: "Admin"},
];


export default Courses;