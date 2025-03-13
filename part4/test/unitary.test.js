const { test, after , beforeEach, describe} = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const app = require('../app')
const supertest = require('supertest')
const helper = require('./test_helper')
const api = supertest(app)

const Blog = require('../models/blog')

//Setea la base de datos en un estado que controlamos y conocemos para poder testear.
beforeEach(async () =>{
  await Blog.deleteMany({})
  const documents = helper.initialBlogs.map(el => new Blog(el))
  await Blog.bulkSave(documents)
  //COMO USAR PROMESAS PARA HACER LOS LLAMADOS A LA BD
  // //Creo un array de objetos de mi Schema
  // const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
  // //A partir de ese array, utilizando map, creo un ARRAY DE PROMESAS
  // const blogPromises = blogObjects.map(obj => obj.save())
  // //Uso la funcion Promise.all() para devolver una sola promesa que se cumple al cumplirse el total de las promesas pasadas como (argumento/parametro [???]).
  // Promise.all(blogPromises)
  // //Estas lineas permiten que el beforeEach no termine de ejecutarse hasta que se resuelvan todas las promesas dentro del callback. Cosa que ocurriria si usaramos un bucle ForEach
  //CON EL BUCLE FOR-OF LAS LLAMADAS SE HACEN EN ORDEN
  // for (const el of helper.initialBlogs) {
  //   let blog = new Blog(el)
  //   await blog.save()
  // }

})

describe('Cuando la bd tiene documentos', () => {

  
  
  test('Cantidad de blogs devueltos', async () => {
    const res = await api.get('/api/blogs')
    
    assert.strictEqual(res.body.length, helper.initialBlogs.length)
  })
  
  test('Propiedad id no es _id', async () => {
    const res = await api.get('/api/blogs')
    assert(res.body.every(obj => obj.hasOwnProperty('id'))) 
  })
  
  test('Creacion de un nuevo blog', async () => {
    const newBlog = {
      title: 'Nuevo Blog',
      author: 'Nuevo Autor',
      url: 'www.nuevoblog.com',
      likes: 12
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
  
    const response = await api.get('/api/blogs')
    const content = response.body
    assert.strictEqual(content.length, helper.initialBlogs.length + 1)
  })

})
describe('Para rutas de documentos unicos', ()=> {
  test('Una id invalida devuelve un 400' , async () => {
    const id = 'idinexistenteenlabd'
    await api
    .get(`/api/blogs/${id}`)
    .expect(400)
  })
})
describe('Comportamiento al eliminar documentos', () => {
  test('Un id invalido devuelve un status 400' , async () => {
    const id = 'unidinvalido'
    await api
    .get(`/api/blogs/${id}`)
    .expect(400)
  })
})
// Cerrar la conexion con la BD
after(async () => {
  await mongoose.connection.close()
})