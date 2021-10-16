import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app/App.css";
import "./css/app/Sidebar.css";
import "./css/app/Navbar.css";
import "./css/app/SignUp.css";
import "./css/app/SignIn.css";
import "./css/courses/Courses.css";
import "./css/courses/Course.css";
import "./css/users/Users.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Users from "./pages/Users.jsx";
import Courses from "./pages/Courses.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Course from "./pages/Course.jsx";
import User from "./pages/User.jsx";

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/signup" exact component={SignUp} />
                    <div className = "App">
                        <Navbar/>
                            <div className="MainContainer">
                                <Sidebar className='Sidebar closed'/>
                                <div className="Content">
                                    <Route path='/users' exact component={Users} />
                                    <Route path='/courses' exact component={Courses} />
                                    <Route path='/course' exact component={Course} />
                                    <Route path='/user' exact component={User} />
                                </div>
                            </div>
                        
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default App;