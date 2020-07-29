const http=require('http')
const express = require("express")
const hostname='0.0.0.0';
const port=process.env.PORT || 8021;
const app=express();
const server=http.createServer(app)
const listener=server.listen(port,hostname,()=>{console.log("Server spinned up on port "+listener.address().port)});

app.get("/",(req,res,next)=>{
    res.send("randiaap")
})