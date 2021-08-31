import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Course } from "../entities/course";
import { getData, saveData } from "../service/service";
const AddCourse = (props) => {
    const initialCourse = new Course();
    const [course, setCourse] = useState(initialCourse);
    async function getCourse() {
        if (props.match && props.match.params && props.match.params.id) {
            let courseData = await getData('course', [{key:"id", value:props.match.params.id}]);
            if (courseData!=null) {
                setCourse(courseData.body[0]);
            }
        }
    }

    let history = useHistory();

    useEffect(() => {
        getCourse();
    }, [])

    async function save () {
        let method = 'POST'
        if(course.id > 0) {
            method = 'PUT'
        } 

        await saveData('course', method, course);
        history.push('/home');
    }

    const handleInputChange = event=> {
        const {name, value} = event.target;
        setCourse({...course, [name]:value})
    }

    return (
        <div className="submit-form">
            <div>
                <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={course.code}
                        onChange={handleInputChange}
                        name="code"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={course.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={course.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </div>

                <button onClick={save} className="btn btn-success" >
                    Submit
                </button>
            </div>
        </div>
    )

}

export default AddCourse;