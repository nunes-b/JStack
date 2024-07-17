const ContactsRepository = require("../repositories/ContactsRepository")

class ContactController{


async index(request, response){
   const contacts =  await ContactsRepository.findAll()
  response.json(contacts)
}
async show(request, response){
  const {id} = request.params
  const contact = await ContactsRepository.findById(id)

  if(!contact){
    return response.status(404).json({error: `Entity not found`})
  }

  response.json(contact)
}
store(){
  //Cria novo registro
}
update(){
  //edita um registro
}
async delete(request, response){
  const {id} = request.params;
  const contact = await ContactsRepository.findById(id)

  if(!contact){
    return response.status(404).json({error: "Entity not found"})
  }

  await ContactsRepository.delete(id)
  response.sendStatus(204)

}

}

//Singleton
module.exports =  new ContactController()
