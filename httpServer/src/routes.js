const userController = require("./controllers/userController")

module.exports = [

{
    endpoint: "/users",
    method:"GET",
    handler: userController.getUsers,
},
{
    endpoint: "/users/:id",
    method:"GET",
    handler: userController.listUsers,
}
,
{
    endpoint:"/products",
    method:"GET",
    handler: userController.getProducts
},
{
    endpoint:"/products/:id",
    method:"GET",
    handler: userController.getProductsById
}

]

