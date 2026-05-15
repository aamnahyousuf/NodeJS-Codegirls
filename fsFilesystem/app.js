import fs from "fs";

fs.readFile("./dummy.txt", 'utf-8', (err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

fs.unlink("./dummy.txt",(err)=>{
    if (err) throw err;
    console.log("Successfully deleted.");
})
