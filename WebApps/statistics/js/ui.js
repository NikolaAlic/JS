var uiModule = (function() {

    var DOMSelectors = {
      buttonAddExam: "#add",
      spanMonth: "#month",
      selectSubject: "#subject-select",
      inputName: "#name",
      selectGrade: "#grade-select",
      pError: "#error",
      pTotalStudent: "#total-student",
      pTotalPassed: ".num-passed",
      pTotalFailed: ".num-failed",
      pPercentageFailed: ".percentage",
      ulPassedList: ".passed-list",
      ulFailedList: ".failed-list",
      divResuts: ".exam-results"
    };
  
    function fillMonthField(monthName) {
      var monthSpanElement = $(DOMSelectors.spanMonth);
      monthSpanElement.text(monthName);
    }
  
    function collectData() {
      var subjectSelect = $(DOMSelectors.selectSubject);
      var nameInput = $(DOMSelectors.inputName);
      var gradeSelect = $(DOMSelectors.selectGrade);
  
      var subjectValue = subjectSelect.val();
      var nameValue = nameInput.val();
      var gradeValue = parseInt(gradeSelect.val());
      var fullNameArr = nameValue.split(" ");
  
      for (var i = 0; i < fullNameArr.length; i++) {
        fullNameArr[i] = fullNameArr[i].trim();
        fullNameArr[i] = fullNameArr[i].charAt(0).toUpperCase() + fullNameArr[i].slice(1);
      }
  
      return {
        subject: subjectValue,
        name: fullNameArr,
        grade: gradeValue
      }
    }
  
    function displayError(formData) {
      var errElement = $(DOMSelectors.pError);
      if (formData.name.length !== 2) {
        errElement.text("Invalid name input!");
      }
      if (!formData.subject) {
        errElement.text("Invalid subject input!");
      }
      if (!formData.grade) {
        errElement.text("Invalid grade input!");
      }
    }
  
    function clearErrorMsg() {
      var errElement = $(DOMSelectors.pError);
      errElement.text("");
    }
  
    function updateStatistic(report) {
      var totalStudentsElement = $(DOMSelectors.pTotalStudent);
      var totalPassedElement = $(DOMSelectors.pTotalPassed);
      var totalFailedElement = $(DOMSelectors.pTotalFailed);
      var percOfFailedElement = $(DOMSelectors.pPercentageFailed);
      totalStudentsElement.text(report.getTotalExams());
      totalPassedElement.text(report.getNumberOfPassed());
      totalFailedElement.text(report.getNumberOfFailed());
      percOfFailedElement.text(report.getPercentageOfFailed() + "%");
    }
  
  
  
    function updateList(report) {
      var passedListElement = $(DOMSelectors.ulPassedList);
      var failedListElement = $(DOMSelectors.ulFailedList);
      failedListElement.text("");
      passedListElement.text("");
  
      for (var i = 0; i < report.listOfExams.length; i++) {
  
        var exam = report.listOfExams[i];
  
        var deleteSpanElement = $("<span class=\"delete-span\">X</span>");
        var gradeSpanElement = $("<span class=\"grade-span\">" + exam.grade + "</span>");
        var gradeAndDeleteElement = $("<p class=\"grade-and-delete\"></p>");
        gradeAndDeleteElement.append(gradeSpanElement);
        gradeAndDeleteElement.append(deleteSpanElement);
        var nameAndSubjectElement = $("<p class=\"name-and-subject\">" + exam.getExamInfo() + "</p>");
        var listItemElement = $("<li id=\"" + i + "\"></li>");
        listItemElement.append(nameAndSubjectElement);
        listItemElement.append(gradeAndDeleteElement);
  
        if (exam.hasPassed()) {
          passedListElement.append(listItemElement);
        } else {
          failedListElement.append(listItemElement);
        }
      }
    }
  
  
  
  
    return {
      DOMSelectors: DOMSelectors,
      fillMonthField: fillMonthField,
      collectData: collectData,
      displayError: displayError,
      clearErrorMsg: clearErrorMsg,
      updateStatistic: updateStatistic,
      updateList: updateList
    }
  
  
  })();