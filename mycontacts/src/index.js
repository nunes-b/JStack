const express = require("express");
const port = 3003
const app = express();
const routes = require("./routes");
require("express-async-errors")


app.use(express.json())
app.use(routes)
app.use((error, request, response, next) =>{
  console.log("########### Error ###########")
  console.log(error)
  response.sendStatus(500)
})

app.listen(port, ()=> console.log(`🚀 Server running at: http://localhost:${port} 🚀`))
