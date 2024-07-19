const {v4} = require("uuid")

let contacts = [
  {
    id: v4(),
    name: "Rômulo",
    email:"romulo@gmail.com",
    phone:"21929292993",
    category_id: v4()
  },  {
    id: v4(),
    name: "Uriel",
    email:"uriel@gmail.com",
    phone:"21929292993",
    category_id: v4()
  },  {
    id: v4(),
    name: "Juliano",
    email:"juliano@gmail.com",
    phone:"21929292993",
    category_id: v4()
  },
]

module.exports = contacts;
