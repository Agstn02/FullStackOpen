const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
  })
blogRouter.get('/:id' , async (request , response , next) =>{
  try {
    const result = await Blog.findById(request.params.id)
    console.log(result)
    if(!result) throw new Error('CastError')
    response.status(200).json(result)

  }
  catch (error) {
    next(error)
  }
})
  
blogRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)
  
    const result = await blog.save()
    response.status(201).json(result)
    
  })
blogRouter.put('/:id' , async (request , response , next) =>{
  try {
    const updatedBlog = {
      likes: request.body.likes
    }

    const result = await Blog.findByIdAndUpdate(request.params.id , updatedBlog , {new: true, context: 'query'})

    if(!result) throw new Error("Not found")
    response.status(200).json(result)
  } 
  catch (error){
    next(error)
  }
})

blogRouter.delete('/:id' , async (request , response , next) =>{
    try {
      const result = await Blog.findByIdAndDelete(request.params.id)
      if(!result)throw new Error("Not found")
      response.status(204)
    } 
    catch (error){
      next(error)
    }  
  })

module.exports = blogRouter