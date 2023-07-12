// let x = my Function(4,3);
// console.log(x);
// function my Function (a,b);{
// return a*b;
// }
function myFunction(p1, p2) {
    return p1 * p2;
  }
  
  let result = myFunction(4, 3);
  console.log(myFunction(4,3));



   
  function myFunctio(a, b) {
    // return a * b;
    return a / b;
  }
  console.log(myFunctio(5,5));

  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  console.log(toCelsius(77));

//   let text = "The temperature is " + toCelsiu(77) + " Celsius.";
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  } 
  console.log("The temperature is "+ toCelsius(177)+" Celsius.");


  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log("My father is " + person.name()); 
    