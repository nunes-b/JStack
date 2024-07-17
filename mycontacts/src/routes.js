const {Router} = require("express")
const router = Router()
const contacts = require("./app/controllers/ContactController")

router.get("/", (request, response)=>{
  response.send("Hello world!");
})

router.get("/contacts", contacts.index)
router.get("/contacts/:id", contacts.show)
router.delete("/contacts/:id", contacts.delete)

module.exports = router;
