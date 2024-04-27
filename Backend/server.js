const express = require("express");
const app = express();
const router = require("./router/auth-router");


app.use("/api/auth", router);
// // app.get("/",(req, res)=>{

// //      res.status(200).send("welcome");
// // });

// app.get("/Registration",(req, res)=>{

//     res.status(200).send("welcome to registration");
// });

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is runnning: ${PORT}`);
});