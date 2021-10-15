import React from 'react';
import { Link } from 'react-router-dom';
import {CoursesCategories} from './CoursesCategories';
import "../../css/courses/CoursesMenu.css";

class CoursesMenu extends React.Component{

    obtainCategoryInfo = () => {
        //Levantar datos base de datos y pasarselos a la categoría
    }

    render() {
        return(
            <div className="coursesMenu">
                <ul className="coursesCategories">
                    {CoursesCategories.map((category, key) => {
                        return (
                            <li key={key} className="category">
                                <Link className="categoryLink" to={category.link} onClick={this.obtainCategoryInfo}>
                                    <div className="categoryIcon">{category.icon}</div>
                                    <div className="categoryTitle">{category.title}</div>
                                </Link>
                                
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default CoursesMenu;