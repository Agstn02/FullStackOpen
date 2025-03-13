require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

// ESTE MÉTODO SIRVE PARA SETEAR UN ENTORNO DE TESTEO QUE USA UNA BASE DE DATOS DIFERENTE A LA DE PRODUCCIÓN
// const MONGODB_URI = process.env.NODE_ENV === 'test' 
//   ? process.env.TEST_MONGODB_URI
//   : process.env.MONGODB_URI

module.exports = {MONGO_URI}