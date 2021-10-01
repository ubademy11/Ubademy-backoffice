import React from "react";
class User extends React.Component {
    render(){
        return (
            <tr key={this.props.userData.id}>
                <td>{this.props.userData.firstName} {this.props.userData.lastName}</td>
                <td>{this.props.userData.email}</td>
                <td>{this.props.userData.role}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button className="btn btn-warning">Edit</button>
                        <button className="btn btn-danger" onClick={() => this.props.onClick(this.props.userData.id)}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default User; 