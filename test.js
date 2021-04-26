var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
    fs.readFile("demo.txt",function(err,data)
    {
        if(err)
         throw err
         else{
        res.writeHead(200,{contentType:"text/html"})
        res.write("<h1>Demo Page</h1>")
         res.write(data.toString())
         res.end();
         }
    })
})
server.listen(8000)
console.log("Node server started...")