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
async store(request, response){
  const {name, email, phone} = request.body
  const contactExists = await ContactsRepository.findByEmail(email)
  if (contactExists){
    return response.status(400).json({error: `email has register`})

  }
  const contact = await ContactsRepository.create({name, email, phone}
  )
  return response.json(contact)
}
async update(request, response){
  const {id} = request.params
  const {name, email, phone} = request.body
  const contactExists = await ContactsRepository.findById(id)
  if (!contactExists){
    return response.status(404).json({error: "Entity not found"})
  }

  if (!name){
    return response.status(400).json({error: "name not found, is required"})
  }
  const contactUpdated = await ContactsRepository.update(id, {name, email, phone})
  return response.json(contactUpdated)
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
