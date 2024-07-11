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
        
    }, listUsers: (req, res) => {  
        const { id } = req.params;
        const user = mocks.users.find(user => user.id === Number(id));

        if (!user) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "User not found" }));
            return;
        }
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify( user ));
    },
    getProducts: (req, res) => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(mocks.products));
    }
,
    getProductsById: (req, res) => {
        const { id } = req.params;
        const product = mocks.products.find(product => product.id === Number(id));

        if (!product) {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({ message: "Product not found"}));
            return;
        }

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(product));
    }

}