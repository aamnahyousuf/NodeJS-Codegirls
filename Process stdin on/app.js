let inputs = [];
let num1, num2, op;

console.log("Enter first number:");

process.stdin.on("data", (input) => {
  input = input.toString().trim();

  inputs.push(input);

  if (inputs.length === 1) {
    num1 = Number(inputs[0]);
    console.log("Enter second number:");
  }

  else if (inputs.length === 2) {
    num2 = Number(inputs[1]);
    console.log("Enter operation (+, -, *, /):");
  }

  else if (inputs.length === 3) {
    op = inputs[2];

    let result;

    if (op === "+") {result = num1 + num2;}
    else if (op === "-") {result = num1 - num2;}
    else if (op === "*") {result = num1 * num2;}
    else if (op === "/") {result = num1 / num2;}

    console.log("Result:", result);
    process.exit();
  }
});