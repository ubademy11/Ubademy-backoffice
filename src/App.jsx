import React, {useImperativeHandle, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css";
import "./css/Sidebar.css";
import "./css/Navbar.css";
import "./css/Login.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Users from "./pages/Users.jsx";
import Login from "./pages/Login.jsx";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: true,
        };
    }

    toggleSidebar() {
        this.setState(prevState => ({
            sidebarOpen: !prevState.sidebarOpen
        }));
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />

                    <div className = "App">
                        <Navbar onClick={this.toggleSidebar.bind(this)}/>
                            <div className="MainContainer">
                                <Sidebar className={this.state.sidebarOpen ? 'Sidebar opened' : 'Sidebar closed'}/>
                                <div className="Content">
                                    <Route path='/users' exact component={Users} />
                                </div>
                            </div>
                        
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default App;