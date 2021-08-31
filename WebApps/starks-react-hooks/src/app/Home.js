import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StudentCourseIntersection } from '../entities/student-course-intersection';
import { deleteData, getData } from '../service/service';
const Home = () => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);

    async function initData() {
        let dataResult = await getData('studentsgrade');
        if (dataResult != null && dataResult.body != null && dataResult.body.length > 0) {
            dataResult = dataResult.body.map(item => new StudentCourseIntersection(item.id, item.fullName, item.courseGradeList))
            setData(dataResult);
            let headersData = [];
            dataResult[0].courseGradeList.forEach(item => {
                headersData.push(item)
            })

            setHeaders(headersData);
        }
    }

    useEffect(() => {
        initData();
    }, [])

    async function deleteCourse(id) {
        let result = await deleteData('course', id);
        if (result != null && result.status == "200") {
            await initData();
        }
    }

    return (<div className="container">
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td></td>
                    {
                        headers.map(course => {
                            let link = `/edit-course/${course.courseId}`;
                            return (<td>           <span>{course.courseName}</span>
                                <Link to={link}>
                                    <i className="far fa-edit action mr-2"></i>
                                </Link>
                                <span onClick={() => deleteCourse(course.courseId)}>
                                    <i className="fas fa-trash action"></i>
                                </span>
                            </td>)
                        })
                    }
                </tr>
                {
                    data.map(item => {
                        let link = `/edit-student/${item.id}`;
                        return (
                            <tr>
                                <td>
                                    <span>{item.fullName}</span>
                                    {/* <Link to={link}>
                                        <i className="far fa-edit action mr-2" aria-hidden="true"></i>
                                    </Link>
                                    <Link to={link}>
                                        <i className="fas fa-trash action"></i>
                                    </Link> */}
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
    </div>)
}

export default Home;