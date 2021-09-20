import React, {useImperativeHandle, useState} from "react";
import User from "./components/User.jsx";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [
                {id: 1, firstName: "Pedro", lastName: "Lopez", email: "pedro.cabj@test.com", role: "User"},
                {id: 2, firstName: "Victoria", lastName: "Gonzalez", email: "vic2000@test.com", role: "User"},
                {id: 3, firstName: "Juan", lastName: "Gutierrez", email: "juan@test.com", role: "Admin"},
                {id: 4, firstName: "Lucas", lastName: "Garcia", email: "lucasgarcia@test.com", role: "User"},
                {id: 5, firstName: "Sofia", lastName: "Fernandez", email: "sofer@test.com", role: "Admin"},
            ]
        };
    }


    deleteUser = function(userId) {
        let users = [...this.state.users];
        users = users.filter((user) => {
            return user.id !== userId
        });
        this.setState({users : users});
        
    }

    render() {
        return (
            <div className = "container">
                <h3 className = "p-3 text-center"> Lista de usuarios </h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => {
                            return <User userData={user} onClick={this.deleteUser.bind(this)}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;