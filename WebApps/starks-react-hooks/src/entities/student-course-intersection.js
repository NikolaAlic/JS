import { Grade } from "./grade";

export class CourseGrade {
    courseId;
    courseName;
    grade;
    studentsGradeId;

    constructor(courseId, courseName, grade, studentsGradeId) {
        this.courseId = courseId;
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
        if (courseGradeList && courseGradeList.length > 0) {
            courseGradeList.forEach(element => {
                let grade = null;
                if (element.grade != null) {
                    grade = new Grade(element.grade.id, 0, element.grade.value);                    
                }
                
                this.courseGradeList.push(new CourseGrade(element.courseId, element.courseName, grade, element.studentsGradeId));
            });
        }
    }

}
