const mocks = require("../mocks/lists.js");


module.exports = 
{
    getUsers: (req, res) => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(mocks.users));
    },
    getProducts: (req, res) => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(mocks.products));
    }

}