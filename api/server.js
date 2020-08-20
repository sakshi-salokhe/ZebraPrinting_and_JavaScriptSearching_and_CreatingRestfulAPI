const http = require('http');
const fs = require("fs");
const url = require("url");
const serverapp = require('./serverapp');

const port = process.env.PORT || 3600;
const lookup = require("mime-types").lookup;
const server = http.createServer((serverapp,res)=>
{
    let parsedURL = url.parse(serverapp.url, true);
    //remove the leading and trailing slashes
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    if (path == "home") {
        path = "index.html";
      }

      let file = "C:/Users/w501738/Desktop/Z-PrintingProject/api/static_files/" + path; //change the path in the quotes to your path

      fs.readFile(file, function(err, content) {
        if (err) {
          console.log(`File Not Found ${file}`);
          res.writeHead(404);
          res.end();
        } else {
          //specify the content type in the response
          console.log(`Returning ${path}`);
          res.setHeader("X-Content-Type-Options", "nosniff");
          let mime = lookup(path);
          res.writeHead(200, { "Content-type": mime });
          
          res.end(content);
        }
      });
});

server.listen(port);
