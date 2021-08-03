var dataModule = (function () {

    var report = new Report();

    function Report() {
        this.date = new Date();
        this.listOfExams = [];
    }


    Report.prototype.addExam = function (exam) {
        return this.listOfExams.push(exam) - 1;
    }


    Report.prototype.getTotalExams = function () {
        return this.listOfExams.length;
    };

    Report.prototype.getNumberOfPassed = function () {
        var count = 0;
        this.listOfExams.forEach(function (exam) {
            if (exam.hasPassed()) {
                count++;
            }
        });
        return count;
    };

    Report.prototype.getMonthName = function () {
        var monthNumber = this.date.getMonth();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[monthNumber];

    }

    Report.prototype.getNumberOfFailed = function () {
        var count = 0;
        this.listOfExams.forEach(function (exam) {
            if (!exam.hasPassed()) {
                count++;
            }
        });
        return count;
    };

    Report.prototype.getPercentageOfFailed = function () {
        if (this.getNumberOfFailed() === 0 && this.getTotalExams() === 0) {
            return 0;
        }
        return Math.round((100 * this.getNumberOfFailed()) / this.getTotalExams());
    };

    Report.prototype.deleteExam = function (stringId) {
        var id = parseInt(stringId);
        var copyArray = [];
        for (var i = 0; i < this.listOfExams.length; i++) {
            if (i !== id) {
                copyArray.push(this.listOfExams[i]);
            }
        }
        this.listOfExams = copyArray;
    }

    function getReport() {
        return report;
    }

    function addExamToReportList(exam) {
        return report.addExam(exam);
    }

    function getMonth() {
        return report.getMonthName();
    }

    function isValidData(examData) {
        return (examData.name.length === 2 && examData.subject && examData.grade);
    }

    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getStudentData = function () {
        return this.name + " " + this.surname;
    }

    function Subject(name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function () {
        return this.name;
    }

    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    Exam.prototype.getExamInfo = function () {
        return this.student.getStudentData() + " (" + this.subject.getSubjectName() + ")";
    };

    Exam.prototype.hasPassed = function () {
        return (this.grade > 5);
    };

    function createExam(examData) {
        var student = new Student(examData.name[0], examData.name[1]);
        var subject = new Subject(examData.subject);
        var exam = new Exam(subject, student, examData.grade);
        return exam;
        // report.addExam(exam);
    }

    return {
        getMonth: getMonth,
        isValidData: isValidData,
        createExam: createExam,
        addExamToReportList: addExamToReportList,
        getReport: getReport
    }


})();