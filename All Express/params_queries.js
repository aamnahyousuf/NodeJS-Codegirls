import express from "express";

const app = express();
const port = 8000;

//:file and :ext are route parameters (arbitrary variables)
//express extracts them and stores in req.params

// app.get("/images/:file.:ext", (req, res) => {
//   console.log(req.params)

//   if (req.params.ext != "jpg"){
//     return res.status(400).send("Only jpg file extension is allowed");
//   }
//   else{
//     console.log("Correct file format received");
//     res.send(req.params);
//   }
// })

app.get("/images{/:image.jpg}", (req,res) =>{
    res.send(req.params)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});