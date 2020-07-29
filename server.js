const http=require('http')
const express = require("express")
const hostname='0.0.0.0';
const port=process.env.PORT || 8021;
const app=express();
const server=http.createServer(app)
const listener=server.listen(port,hostname,()=>{console.log("Server spinned up on port "+listener.address().port)});
const https=require("https")
app.get("/",(req,res,next)=>{
    https.get('http://13.233.2.27:5000', {headers:{ 'User-Agent': 'Node Server' }},(resp) => {
        let pythonData = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          pythonData += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          pythonData=JSON.parse(pythonData)
          res.send(pythonData)
          res.end()
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });

})