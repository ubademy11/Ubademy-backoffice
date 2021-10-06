import React from "react";
class Course extends React.Component {
    render(){
        return (
            <tr key={this.props.courseData.id}>
                <td>{this.props.courseData.firstName} {this.props.courseData.lastName}</td>
                <td>{this.props.courseData.email}</td>
                <td>{this.props.courseData.role}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button className="btn btn-warning">Edit</button>
                        <button className="btn btn-danger" onClick={() => this.props.onClick(this.props.courseData.id)}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Course; 