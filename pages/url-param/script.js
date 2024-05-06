const theName = document.getElementById("name");
const age = document.getElementById("age");
const myClass = document.getElementById("class");

let getThing =window.location.search;
let parms = new URLSearchParams(getThing);
let names =parms.get('name',);
let ages = parms.get('age',);
let myClasses =parms.get('my-class',);

theName.innerText = names; //  using URL parameter to get value and replace "aaa"
age.innerText = ages; //  using URL parameter to get value and replace 2222
myClass.innerText = myClasses; //  using URL parameter to get value and replace "cc"

