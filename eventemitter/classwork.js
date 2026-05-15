import eventEmitter from "events";

const logs = new eventEmitter();

let logStatus = "success";
logs.on("startLogging", () => {
  if (logStatus == "success"){
    console.log("User has logged in");
  }
  else{
    console.log("Failed");
  }
});
logs.emit("startLogging");

