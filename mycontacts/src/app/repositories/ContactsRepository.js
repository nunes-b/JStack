const contacts = require("../../mocks/contacts")


class ContactsRepository{

findAll(){
  return new Promise((resolve) => {
    resolve(contacts)
  })
}
findById(id){
  return new Promise((resolve)=>{
    const filtered = contacts.find((contact) => contact.id === id)
    resolve(filtered)
  })
}

delete(id) {
  return new Promise((resolve) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      contacts.splice(index, 1);
    }
    resolve();
  });
}

}

module.exports = new ContactsRepository()
