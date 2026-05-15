process.stdin.on("data", function(input) {
    let numbers = input.toString().split(" ");
    
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);

    console.log(a + b);


});