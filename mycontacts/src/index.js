const express = require("express")
const port = 3003
const app = express();

app.get("/", (request, response)=>{
    response.send("Hello world")
})

app.listen(port, ()=> console.log(`🚀 Server running at:http://localhost:${port}`))