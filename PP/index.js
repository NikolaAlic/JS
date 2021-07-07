var obj = {
    job: "Programmer",
    say: function (who, b) {
        return `Hey ${who} is a ${this.job} in ${b}`
    }
}

// console.log(obj.say('Nikola'));
// var testObj = { job: "DbAdmin"};
// console.log(obj.say.call(testObj, "Nikola", "Belgrade"));
// console.log(obj.say.apply(testObj, ["Nikola", "Belgrade"]))

var x = 9;
var testX = {
    x: 81,
    getX: function () {
        return this.x;
    }
}

console.log(testX.getX());

var getX = testX.getX;
console.log(getX());

var testB = {
    x: 42
}

var bindGetX = getX.bind(testB);
console.log(bindGetX());

var person = {
    calculateAge: function () {
        var year = new Date().getFullYear();
        var age = year - this.yob
        console.log(age);
    },

    getFullName: function () {
        //var fullName = `${this.firstName} ${this.lastName}`
        var fullName = this.firstName + ' ' + this.lastName;
        console.log(fullName)
    }
}

var vladimir = Object.create(person);
vladimir.firstName = "Vladimir";
vladimir.lastName = "Putin";
vladimir.yob = 1950;
console.log(vladimir);
vladimir.calculateAge();
vladimir.getFullName();