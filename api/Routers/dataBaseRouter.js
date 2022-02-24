require('dotenv').config()
const userRouter = require('express').Router()
const { json } = require('express')


dataBaseRouter.get('/', (req, res, next) => {
  res.send(`
      <div>
          <h1'> Data from Data Base </h1>
      </div>
  `)
})


module.exports = dataBaseRouter