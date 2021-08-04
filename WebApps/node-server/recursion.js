const countdown = (value) => {
    console.log(value);
    return (value > 0) ? countdown(value - 1) : value;
 }

//  countdown(10);

 function countdownForLoop(value) {
     for(var i = value; i>0; i--) {
         console.log(i);
     }
 }

//  countdownForLoop(10);

 function factoriel(value) {
     if(value == 1) {
         return value;
     }

     return value * factoriel(value-1);
 }

 console.log(factoriel(5));