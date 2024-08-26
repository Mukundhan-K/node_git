

const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{

    const parsUrl = url.parse(req.url, true);

    if (parsUrl.pathname === "/" || parsUrl.pathname === "/index") {
        res.writeHead(200 , {"Content-Type" : "text/html"});
        res.end("<h4>home page</h4>");
    } else if(parsUrl.pathname === "/about") {
        res.writeHead(200 , {"Content-Type" : "text/html"});
        res.end("about page");
    } else {
        res.writeHead(404 , {"Content-Type" : "text/html"});
        res.end("error page not found");
    }
});

server.listen(3000, ()=>{
    console.log("port running at http://localhost:3000");
    
})