import React from 'react';
import axios from 'axios';
import * as Constants from '../constants.js';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userCourses: [],
            createdCourses: []
        };
    }
    
    async fetchUserCourses() {
        try {
            const { data } = await axios.get(Constants.USER_COURSES_URL, {
                params: {
                    userId: this.props.userInfo.id
                },
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }  
            });
            this.setState({ userCourses: data });
        } catch(error) {
            console.log("Error al buscar los cursos del usuario");
            console.log(error);
        }

        this.setState({ loading: false });
    };

    async fetchCreatedCourses() {
        try {

            const { data } = await axios.get(Constants.COURSE_LIST_URL, {
                params: {
                    creatorId: this.props.userInfo.id
                },
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }  
            });
            this.setState({ createdCourses: data.courses });
        } catch(error) {
            console.log("Error al buscar los cursos del usuario");
            console.log(error);
        }

        this.setState({ loading: false });
    };

    componentDidMount() {
        console.log(this.props.userInfo);
        this.fetchUserCourses();
        this.fetchCreatedCourses();

    }

    titleCase(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    render() {
        console.log(this.props);
        const joinedDate = new Date(this.props.userInfo.createdAt);
        let joined = joinedDate.getDay() + "/" + joinedDate.getMonth() + "/" + joinedDate.getFullYear();

        return (
            <div className="userPage">    
                {/*<img className="userLogo" src={"https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg"}></img>*/}
                <div className="userInfo">
                    {/*<p>Nombre: </p> <p className="userData"> {this.props.userInfo.name}</p>*/}
                    <h2>{this.props.userInfo.name}</h2>
					
                    <p>Id: {this.props.userInfo.id}</p>                   
                    <p>Email: {this.props.userInfo.email}</p>
					<p>Role: {this.titleCase(this.props.userInfo.role)}</p>
                    <p>Membership: {this.props.userInfo.membershipType}</p>
                    <p>Joined: {joined}</p>
					<span>Image:</span>{this.props.userInfo.image ? <img src={this.props.userInfo.image} className="userLogo" /> : <></>}

                    <Accordion className="accordion inscription-list" defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Enrollments
                        </AccordionSummary>

                        {this.state.userCourses.map(inscription => {
                            if(inscription.active)
                                return <AccordionDetails>{inscription.course.title}</AccordionDetails>
                        })}
                    </Accordion>

                    <Accordion className="accordion created-courses-list" defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Created courses
                        </AccordionSummary>

                        {this.state.createdCourses.map(course => {
                            return <AccordionDetails>{course.title}</AccordionDetails>
                        })}
                    </Accordion>

                </div>
            </div>
        );
    };
}

UserProfile.defaultProps = {
    userInfo: {
        name: '',
        email: '',
    }
};

export default UserProfile;