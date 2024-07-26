
const CategoryRepository = require('../repositories/CategoryRepository')
class CategoryController {

  async index (request, response){
    const categories =  await CategoryRepository.findAll()
    response.json(categories)
  }

  async store (request, response){
    const {name} = request.body
    if (!name){
      return response.status(400).json({error: "name not found, is required"})
    }
    const category = await CategoryRepository.create({name})
    response.json(category)
  }

  async show (request, response){
    const {id} = request.params
    const category = await CategoryRepository.findById(id)
    response.json(category)
  }

  async update (request, response){
    const {id} = request.params
    const {name} = request.body
    const categoryExists = await CategoryRepository.findById(id)
    if (!categoryExists){
      return response.status(404).json({error: "Entity not found"})
    }
    if (!name){
      return response.status(400).json({error: "name not found, is required"})
    }
    const category = await CategoryRepository.update(id, {name})
    response.json(category)
  }

  async delete (request, response){
    const {id} = request.params
    const category = await CategoryRepository.findById(id)
    if (!category){
      return response.status(404).json({error: "Entity not found"})
    }
    await CategoryRepository.delete(id)
    response.sendStatus(204)
  }

}

module.exports = new CategoryController()
