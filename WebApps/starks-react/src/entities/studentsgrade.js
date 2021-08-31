import { Grade } from "./grade";

export class CourseGrade {
    courseId;
    courseName;
    grade;
    studentsGradeId;

    constructor(courseid, courseName, grade, studentsGradeId) {
        this.courseId = courseid;
        this.courseName = courseName;
        this.grade = grade;
        this.studentsGradeId = studentsGradeId;
    }
}

export class StudentCourseIntersection {
    id;
    fullName;
    courseGradeList = [];
    constructor(id, fullName, courseGradeList) {
        this.id = id;
        this.fullName = fullName;
        if(courseGradeList!=null && courseGradeList.length>0) {
            courseGradeList.forEach(item=> {
                let grade = null;
                if(item.grade!=null) {
                    grade = new Grade(item.grade.id, item.grade.value);
                }

                this.courseGradeList.push(new CourseGrade(item.courseId, item.courseName , grade, item.studentsGradeId));
            })
        }
    }
}