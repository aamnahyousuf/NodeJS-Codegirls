function add(a, b, callback) {
    console.log(`The sum of ${a} and ${b} is : `, a+b);
    callback(a + b);
}

function subtract(a, b, callback) {
    console.log(`The difference of ${a} and ${b} is : `, a-b);
    callback(a - b);
}

add(10, 5, function(result) {
    setTimeout(function() {
        subtract(13, 3, function(finalResult) {
        });
    }, 2000); 
});