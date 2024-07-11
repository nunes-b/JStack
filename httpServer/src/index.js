const http = require("http");
const routes = require("./routes")
const {URL} = require("url")
port = 3000;

const server = http.createServer((request, repsonse) => {
    console.log(`Request method:" ${request.method}`);
    const parsedUrl = new URL("http://localhost:3000" + request.url);
    console.log(parsedUrl)
    const route = routes.find(route => route.endpoint === parsedUrl.pathname && route.method === request.method);

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        route.handler(request, repsonse);
    } else {
        repsonse.writeHead(404, {"Content-Type": "text/plain"});
        repsonse.end("Not found");
    }
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
