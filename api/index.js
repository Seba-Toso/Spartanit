require('colors')
require('dotenv').config()
const cors = require('cors')
const express = require('express')

const dataBaseRouter = require('./Routers/dataBaseRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./build'))


app.get('/', (_req, res, next) => {
  res.send(`
    <div>
      <div>
          <h1> Spartanit API </h1>
      </div>
      <div>
          <p> Status - Online </p>
      </div>
    </div>
  `)
})

app.use('/api', dataBaseRouter)

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`Server created and running on port ${PORT}`.black.bgGreen)
  console.log(`localhost:${PORT}`.black.bgGreen)
})

module.exports = { app, server }