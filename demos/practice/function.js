let http = require("http");

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "test/plain" });
    response.write("Hello world");
    response.end();
  })
  .listen(8888);

// let http = require("http");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "test/plain" });
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);
