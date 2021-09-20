import React from "react";

class User extends React.Component {
    render(){
        return (
            <tr key={this.props.userData.id}>
                <td>{this.props.userData.firstName} {this.props.userData.lastName}</td>
                <td>{this.props.userData.email}</td>
                <td>{this.props.userData.role}</td>
            </tr>
        );
    }
}

export default User; 