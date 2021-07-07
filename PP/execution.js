var a = "No text";
function first() {
    a = "first";
    second();
    console.log(a);
}

function second() {
    a="second"
    third();
}

function third() {
    a = "third";

}


var name = "John";
function firstA() {
   var a = "Hello";
   secondA();
   var x = a + this.name;
}

function secondA() {
   var b = "Hi!";
   thirdA();
   var z = b + this.name;
}

function thirdA() {
   var c = "Hey!";
   var z = c + this.name;
  }

var test = function () {
    var a = "test";

    function testA() {
        a = "testA"
        var b = "testB"
    }

}

test();
