import React, { Component } from 'react'
import { Course } from '../entities/course'
import { getData, saveData } from '../services/service';
class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: new Course(0, "", "", ""),
        }
    }

    async componentDidMount() {
        if (this.props.match != null && this.props.match.params != null && this.props.match.params.id > 0) {
            let result = await getData("course", [{ key: "id", value: this.props.match.params.id }]);
            if (result != null) {
                this.setState({ course: result.body[0] });
            }
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        let data = { ...this.state.course, [name]: value };
        this.setState({ course: data });
    }

    async save() {
        let method = "POST";
        if (this.state.course.id > 0) {
            method = "PUT";
        }

        await saveData('course', method, this.state.course);
        window.location.assign('/home');
    }

    render() {
        return (
            <div className="submitForm">
                <div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input type="text" className="form-control" required value={this.state.course.code} name="code" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" required value={this.state.course.name} name="name" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Description</label>
                        <input type="text" className="form-control" required value={this.state.course.description} name="description" onChange={this.handleInput} />
                    </div>
                    <button onClick={this.save.bind(this)} className="btn btn-success" >
                        Save Course
                    </button>
                </div>
            </div>
        )
    }
}

export default AddCourse;