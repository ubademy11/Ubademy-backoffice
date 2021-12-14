import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
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

        this.updateCurrentUser = this.updateCurrentUser.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    updateCurrentUser(userInfo) {
        localStorage.setItem('currentUser', userInfo.name);
    }
    
    signOut() {
        this.setState({ currentUser: '' });
        localStorage.removeItem('token'); //La redirección se hace en el componente NavBar
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route 
                        path="/" 
                        exact render={(props) => <SignIn {...props} updateCurrentUser={this.updateCurrentUser}/>} 
                    />
                    <Route path="/signup" exact component={SignUp} />
                    <div className = "App">
                        <Navbar signOut={this.signOut}/>
                            <div className="MainContainer">
                                <Sidebar className='Sidebar closed'/>
                                <div className="Content">
                                    <PrivateRoute path='/users' exact component={Users} />
                                    <PrivateRoute path='/courses' exact component={Courses} />
                                    <PrivateRoute path='/course' exact component={Course} />
                                    <PrivateRoute path='/user' exact component={User} />
                                </div>
                            </div>
                        
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default App;