import React, { Component } from 'react'
import { deleteData, getData } from '../services/service'
import { StudentCourseIntersection } from '../entities/studentsgrade';
import { Link } from 'react-router-dom';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            headers: []
        }
    }

    async initData() {
        let dataResult = await getData('studentsgrade');
        if (dataResult != null && dataResult.body != null && dataResult.body.length > 0) {
            let result = dataResult.body.map(item => new StudentCourseIntersection(item.id, item.fullName, item.courseGradeList));
            let headersData = [];
            result[0].courseGradeList.forEach(item => {
                headersData.push(item);
            })

            this.setState({ data: result, headers: headersData });
        }
    }

    async componentDidMount() {
        await this.initData();
    }

    async deleteCourse(id) {
        let result = await deleteData('course', id);
        if(result!=null && result.status == "200") {
            await this.initData();
        }
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td></td>
                            {
                                this.state.headers.map(course => {
                                    let link = `/edit-course/${course.courseId}`;
                                    return (

                                        <td>
                                            <span>{course.courseName}</span>
                                            <Link to={link}>
                                                <i className="far fa-edit action mr-2"></i>
                                            </Link>
                                            <span onClick={() => this.deleteCourse(course.courseId)}>
                                                <i className="fas fa-trash action"></i>
                                            </span>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        {
                            this.state.data.map(item => {
                                return (
                                    <tr>
                                        <td>
                                            <span>{item.fullName}</span>
                                        </td>
                                        {
                                            item.courseGradeList.map(course => {
                                                if (!course.grade) {
                                                    return <td></td>
                                                }

                                                return (
                                                    <td>{course.grade.value}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Home;