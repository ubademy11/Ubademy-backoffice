import React, {useState} from "react";
import User from "./components/User.jsx";

export function App() {

    const [users, setUsers] = useState([
        {id: 1, firstName: "Pedro", lastName: "Lopez", email: "pedro.cabj@test.com", role: "User"},
        {id: 2, firstName: "Victoria", lastName: "Gonzalez", email: "vic2000@test.com", role: "User"},
        {id: 3, firstName: "Juan", lastName: "Gutierrez", email: "juan@test.com", role: "Admin"},
        {id: 4, firstName: "Lucas", lastName: "Garcia", email: "lucasgarcia@test.com", role: "User"},
        {id: 5, firstName: "Sofia", lastName: "Fernandez", email: "sofer@test.com", role: "Admin"},
    ]);

    return (
        <div className = "container">
            <h3 className = "p-3 text-center"> Lista de usuarios </h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return <User userData={user}/>
                    })}
                </tbody>
            </table>
        </div>

    );
}