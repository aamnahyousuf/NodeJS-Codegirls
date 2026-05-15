// Add function add list and delete using process.argv node app.js file

let list = ["Apple", "BMW", "Cat"];

const action = process.argv[2];
const item = process.argv[3];

if (action === "add") {
  list.push(item);
  console.log("Added:", item);
  console.log(list);
}


else if (action === "delete") {

  list = list.filter((value) => value !== item);

  console.log("Deleted:", item);
  console.log(list);
}

else if (action === "list") {
  console.log(list);
}