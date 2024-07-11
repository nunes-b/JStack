const userController = require("./controllers/userController")

module.exports = [

{
    endpoint: "/users",
    method:"GET",
    handler: userController.getUsers,
},
{
    endpoint: "/users",
    method:"POST",
}
,
{
    endpoint:"/products",
    method:"GET",
    handler: userController.getProducts
}

]

