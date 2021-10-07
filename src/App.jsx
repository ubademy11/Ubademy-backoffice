import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app/App.css";
import "./css/app/Sidebar.css";
import "./css/app/Navbar.css";
import "./css/app/Login.css";
import "./css/app/SignIn.css";
import "./css/courses/Courses.css";
import "./css/users/Users.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Users from "./pages/Users.jsx";
import Courses from "./pages/Courses.jsx";
import Login from "./pages/Login.jsx";
import SignIn from "./pages/SignIn.jsx";

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/login" exact component={Login} />
                    <div className = "App">
                        <Navbar/>
                            <div className="MainContainer">
                                <Sidebar className='Sidebar closed'/>
                                <div className="Content">
                                    <Route path='/users' exact component={Users} />
                                    <Route path='/courses' exact component={Courses} />
                                </div>
                            </div>
                        
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default App;