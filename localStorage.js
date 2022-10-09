// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
//Convert myobj to JSON 
const myJSON = JSON.stringify(myObj);

// Store myJSON as "testJSON"
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");

//Convert to Js object
let obj = JSON.parse(text);

//Log output to the console 
console.log(obj.name);
