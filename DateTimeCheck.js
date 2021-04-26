const display = require("./DateAndTime");
const obj = display()
console.log("displaying ")
console.log(obj.output)
console.log(obj.time)


var http = require("http")
var server = http.createServer((req,res)=>{
    if(req.url == "/"){
    res.writeHead(200,{contentType:"text/html"})
    res.write("<h1>Main Page</h1>")
    res.write(`${obj.time} ${obj.output}`)
    res.end()
    }
    else if(req.url == "/stud"){
        res.writeHead(200,{contentType:"text/html"})
        res.write("<h1>Main Page</h1>")
        res.write(`${obj.time} ${obj.output}`)
        res.end()
        }
})

    server.listen(8010)
console.log("Node server started")