const mocks = require("../mocks/lists.js");


module.exports = 
{
    createUser: (request, response) =>{
    const {body} = request
    lastUserId = mocks.users.length - 1;
    const newUser = {
        id: lastUserId + 1,
        name: body.name,
    }
    mocks.users.push(newUser)
    response.send(201, {user: newUser})

    },

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
            return res.send(400, { message: "User not found"});
        }
        
        res.send(200, user);
    },
    updateUser: (request, response)=>{

        const {id} = request.params;
        const {name} = request.body

        const users = mocks.users.find(user => user.id ===Number(id));
        
        if(!users){
            return response.send(400, {error: "User not found"})
        }

        updatedUser = {
            "id":users.id,
            "name":users.name = name
        };
        
        response.send(200, updatedUser)
        },
    deleteUser:(request, response) =>{
        let {id} = request.params;

        id = Number(id);
        const filteredUsers = mocks.users.filter((user) => user.id !== id);
    
        if (filteredUsers.length === mocks.users.length) {
            return response.send(400, { error: "User not found" });
        }
    
        mocks.users = filteredUsers;
    
        response.send(200,{ deleted: true });
    }

}