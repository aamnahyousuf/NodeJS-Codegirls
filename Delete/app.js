let step = 0;
let num1, num2, op; 

console.log("Enter first number:");

process.stdin.on("data", (input) => {
  input = input.toString();

  if (step == 0) {
    num1 = Number(input);
    console.log("Enter second number:");
    step++;
  } 
  else if (step == 1) {
    num2 = Number(input);
    console.log("Choose operation (+, -, *, /):");
    step++;
  } 
  else if (step == 2) {
    op = input;

    let result;

    if (op == "+") {
      result = num1 + num2;
    } 
    else if (op == "-") {
      result = num1 - num2;
    } 
    else if (op == "*"){
        result = num1*num2;
    }
    else if (op == "/"){
        result = num1 / num2;
    }


    console.log("Result:", result);
    process.exit();
  }
});