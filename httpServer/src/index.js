const http = require("http");
const routes = require("./routes");
const { URL } = require("url");
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method}`);
    const parsedUrl = new URL("http://localhost:3000" + request.url);
    
    let { pathname } = parsedUrl;
    let id = null;

    const splitPathName = pathname.split("/").filter(Boolean);
    if (splitPathName.length > 1) {
        pathname = `/${splitPathName[0]}/:id`;
        id = splitPathName[1];
    }
    console.log(splitPathName);

    const route = routes.find(route => route.endpoint === pathname && route.method === request.method);

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        request.params = { id };
        route.handler(request, response);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("Not found");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
