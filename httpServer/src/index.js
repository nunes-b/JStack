const http = require("http");
port = 3000;
const routes = require("./routes")

const server = http.createServer((request, repsonse) => {
    console.log(`Request method:" ${request.method}`);

    const route = routes.find(route => route.endpoint === request.url && route.method === request.method);
    
    if (route) {
        route.handler(request, repsonse);
    } else {
        repsonse.writeHead(404, {"Content-Type": "text/plain"});
        repsonse.end("Not found");
    }
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
