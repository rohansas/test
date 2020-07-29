const http=require('http')
const express = require("express")
const hostname='0.0.0.0';
const port=process.env.PORT || 8021;
const app=express();
const server=http.createServer(app)
const listener=server.listen(port,hostname,()=>{console.log("Server spinned up on port "+listener.address().port)});
app.get("/",(req,res,next)=>{
res.send("randiap")
res.end()

})
setInterval(ddos,5000)

function ddos(){
    const extra=Math.random()
    const uril='http://13.233.2.27:5000/a'+extra
    http.get(uril, {headers:{ 'User-Agent': 'Node Server' }},(resp) => {
        let pythonData = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          pythonData += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log("hello m up")
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}