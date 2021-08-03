var mainModule = (function (ui, data) {


    function setEventListeners() {
        var addButton = $(ui.DOMSelectors.buttonAddExam);
        var selectSubjectElement = $(ui.DOMSelectors.selectSubject);
        var selectGradeElement = $(ui.DOMSelectors.selectGrade);
        var inputNameElement = $(ui.DOMSelectors.inputName);
        var examResultsDiv = $(ui.DOMSelectors.divResuts);

        addButton.on("click", addButtonEventHandler);
        selectGradeElement.on("focus", clearMsg);
        selectSubjectElement.on("focus", clearMsg);
        inputNameElement.on("focus", clearMsg);
        examResultsDiv.on("click", deleteExamHendler);
    }

    function clearMsg() {
        ui.clearErrorMsg();
    }

    function updateMonthName() {
        var monthName = data.getMonth();
        ui.fillMonthField(monthName);

    }

    function addButtonEventHandler() {
        //collect data
        var formData = ui.collectData();
        //validate data and display error
        if (!data.isValidData(formData)) {
            ui.displayError(formData);
            return;
        }
        //create Exam and add it to Report.listOfAllExams
        var createdExam = data.createExam(formData);
        var index = data.addExamToReportList(createdExam);
        //update statistic
        var report = data.getReport();
        ui.updateStatistic(report);
        //update result list
        ui.updateList(report);
    }

    function deleteExamAndUpdateData(id) {
        deleteItem(report, id);
        updateStatistic(report);
        updateList(report);
    }

    function deleteExamHendler(event){
      if (event.target.className === "delete-span") {
          var selectedLiElement = $(event.target.parentElement.parentElement);
          var id = selectedLiElement.attr("id");
          var report = data.getReport();
          report.deleteExam(id);
          ui.updateStatistic(report);
          ui.updateList(report);
      }
    }

    function init() {
        updateMonthName();
        setEventListeners();
    }

    return {
        init: init
    }

})(uiModule, dataModule);