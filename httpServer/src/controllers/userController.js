const mocks = require("../mocks/lists.js");


module.exports = 
{
    getUsers: (req, res) => {
        const {order} = req.query
        const sortedUsers = mocks.users.sort((a, b) => {
            if (order === "desc") {
                return a.id < b.id ? 1 : -1
            }

            return a.id > b.id ? 1 : -1
        })

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(sortedUsers));
        
    },
    getProducts: (req, res) => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(mocks.products));
    }

}