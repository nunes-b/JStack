const {Router} = require("express")
const router = Router()
const contacts = require("./app/controllers/ContactController")
const categories = require("./app/controllers/CategoryController")

router.get("/", (request, response)=>{
  response.send("Hello world!");
})

router.post("/contacts", contacts.store)
router.put("/contacts/:id", contacts.update)
router.get("/contacts", contacts.index)
router.get("/contacts/:id", contacts.show)
router.delete("/contacts/:id", contacts.delete)

router.post("/categories", categories.store)
router.put("/categories/:id", categories.update)
router.get("/categories", categories.index)
router.get("/categories/:id", categories.show)
router.delete("/categories/:id", categories.delete)


module.exports = router;
