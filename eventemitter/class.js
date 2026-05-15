import eventEmitter from "events";

const myEvent = new eventEmitter();

myEvent.on("go", () => {
  console.log("go is running");
});

myEvent.on("eat", (x, y) => {
  console.log("food times");
});

let order = {
  id: 1,
  name: "american shoes",
  price: 20000,
  color: "black",
};

myEvent.on("orderplace", (order) => {
  console.log(`Your order has been placed ${order.name}`);
});
myEvent.emit("orderplace", order);
myEvent.emit("eat");

let day = "sunday";
if (day === "sunday") {
  myEvent.emit("go");
}