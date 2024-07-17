const express = require("express");
const port = 3003
const app = express();
const routes = require("./routes")

app.use(routes)


app.listen(port, ()=> console.log(`🚀 Server running at: http://localhost:${port}`))
