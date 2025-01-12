
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "coding", "hiking"]; // array
let person = { name: "Jane", age: 30 }; // object


console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");
console.log("Person: " + person.name + " (Type: " + typeof person + ")");


function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Cannot divide by zero.");
        return;
      }
      break;
    default:
      alert("Invalid operation.");
      return;
  }

 
  document.getElementById("result").textContent = result;
}


function greetUser(name) {
  return "Hello, " + name + "!";
}

let userGreeting = greetUser("Peter waweru");
document.getElementById("dynamic-content").innerHTML = userGreeting;


let userAge = prompt("Enter your age:");
if (userAge >= 18) {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote.");
}


let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ol.appendChild(li);
}
document.body.appendChild(ol);


document.querySelector("h1").textContent = "JavaScript in Action!";


let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
