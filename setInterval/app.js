let i;
console.log("Enter time:");
process.stdin.on("data", (input) =>{
    i = Number(input);

let timer = setInterval(() => {
  console.log(i);
  i++;

  if (i > 60) {
    console.log("60 seconds reached!");
    clearInterval(timer);
    process.stdin.pause();
    process.exit();
  }
}, 1000);

})
